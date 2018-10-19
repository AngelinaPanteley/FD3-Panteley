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
      isEdit: PropTypes.bool.isRequired,
    }),
    onDelete: PropTypes.func.isRequired,
    onFIOChange: PropTypes.func.isRequired,
    onBalanceChange: PropTypes.func.isRequired,
  };

  state = {
    fam: this.props.client.fam,
    im: this.props.client.im,
    otch: this.props.client.otch,
    balance: this.props.client.balance,
    isActive: this.props.client.balance >= 0,
    isEdit: this.props.client.isEdit,
  };

  componentWillReceiveProps = (newProps) => {
    const {fam, im, otch} = this.state;
    const newClient = newProps.client;

    if (fam !== newClient.fam || im !== newClient.im || otch !== newClient.otch) {
      this.setState({
        fam: newClient.fam,
        im: newClient.im,
        otch: newClient.otch,
        isEdit: false,
      });
    }

    if (this.state.balance !== newClient.balance) {
      this.setState({
        balance: newClient.balance,
        isActive: newClient.balance >= 0,
      });
    }

    if (this.state.isEdit !== newClient.isEdit) {
      this.setState({
        isEdit: newClient.isEdit,
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
    this.props.onBalanceChange(this.props.client.id, this.state.balance + 1);
  }

  decreaseBalance = () => {
    this.props.onBalanceChange(this.props.client.id, this.state.balance - 1);
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
  }

  render() {
    console.log("MobileClient id=" + this.props.client.id + " render");

    const {fam, im, otch} = this.state;

    return (
      <div>
        <div className='MobileClient'>
          <span className="MobileClientId">{this.props.client.id}</span>
          <div className='MobileClientFio'>
            {
              this.state.isEdit
                ?
                <form onSubmit={this.saveForm} className="MobileClientFioForm">
                  <input type="text" defaultValue={fam} name="fam" />
                  <input type="text" defaultValue={im} name="im" />
                  <input type="text" defaultValue={otch} name="otch" />
                  <input type="submit" value="Save" />
                </form>
                :
                <div className="MobileClientFioContainer">
                  <span>{fam + " " + im + " " + otch}</span>
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
      </div>
    );

  }

}

export default MobileClient;
