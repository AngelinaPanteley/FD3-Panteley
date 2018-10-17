import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    client: PropTypes.shape({
      id: PropTypes.number.isRequired,
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
      isEdit: PropTypes.bool,
      isShown: PropTypes.bool.isRequired,
    }),
  };

  static defaultProps = {
    client: {
      isEdit: false,
    }
  }

  state = {
    FIO: {
      fam: this.props.client.fam,
      im: this.props.client.im,
      otch: this.props.client.otch,
    },
    balance: this.props.client.balance,
    isActive: this.props.client.balance >= 0,
    isEdit: this.props.client.isEdit,
  };

  componentWillReceiveProps = (newProps) => {
    const FIO = this.state.FIO;
    const newClient = newProps.client;
    if (FIO.fam !== newClient.fam || FIO.im !== newClient.im || FIO.otch !== newClient.otch) {
      this.setState({
        FIO: {
          fam: newClient.fam,
          im: newClient.im,
          otch: newClient.otch,
        },
        isEdit: false,
      });
    }

    if (this.state.balance !== newClient.balance) {
      this.setState({
        balance: newProps.client.balance,
        isActive: newProps.client.balance >= 0,
      });
    }
  };

  deleteHandle = () => {
    this.props.onDelete(this.props.client.id);
  }

  editButtonHandle = () => {
    this.setState({ isEdit: true });
  }

  increaseBalance = () => {
    this.props.onBalanceChange(this.props.client.id, ++this.state.balance);
    if (this.state.balance === 0) {
      this.setState({
        isActive: true,
      });
    }
  }

  decreaseBalance = () => {
    this.props.onBalanceChange(this.props.client.id, --this.state.balance);
    if (this.state.balance === -1) {
      this.setState({
        isActive: false,
      });
    }
  }

  saveForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const FIO = {
      fam: form.fam.value,
      im: form.im.value,
      otch: form.otch.value,
    };
    this.props.onFIOChange(this.props.client.id, FIO);
    this.setState({ isEdit: false });
  }

  render() {

    console.log("MobileClient id=" + this.props.client.id + " render");
    const FIO = this.state.FIO;
    return (
      <div>
        {
          this.props.client.isShown && <div className='MobileClient'>
            <div className='MobileClientFio'>
              {
                this.state.isEdit
                  ?
                  <form onSubmit={this.saveForm} className="MobileClientFioForm">
                    <input type="text" defaultValue={FIO.fam} name="fam" />
                    <input type="text" defaultValue={FIO.im} name="im" />
                    <input type="text" defaultValue={FIO.otch} name="otch" />
                    <input type="submit" value="Save" />
                  </form>
                  :
                  <div className="MobileClientFioContainer">
                    <span>{FIO.fam + " " + FIO.im + " " + FIO.otch}</span>
                    <button onClick={this.editButtonHandle}>Edit</button>
                  </div>
              }
            </div>
            <div className='MobileClientBalance'>
              <button onClick={this.decreaseBalance}>-</button>
              <span>{this.state.balance}</span>
              <button onClick={this.increaseBalance}>+</button>
            </div>
            <div className='MobileClientStatus'>
              {
                this.state.isActive
                  ?
                  <span className='MobileClientStatusActive'>Active</span>
                  :
                  <span className='MobileClientStatusBlocked'>Blocked</span>
              }
            </div>
            <div className='MobileClientActions'>
              <button onClick={this.deleteHandle}>Delete</button>
            </div>
          </div>
        }
      </div>
    );

  }

}

export default MobileClient;
