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
      balance: PropTypes.number.isRequired
    }),
  };

  state = {
    FIO: {
      fam: this.props.client.fam,
      im: this.props.client.im,
      otch: this.props.client.otch,
    },
    balance: this.props.client.balance,
    isActive: this.props.client.balance >= 0,
  };

  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient id="+newProps.client.id+" componentWillReceiveProps");

    this.setState({ FIO:{
      fam: newProps.client.fam,
      im: newProps.client.im,
      otch: newProps.client.otch,
    }, balance: newProps.client.balance });
  };

  render() {

    console.log("MobileClient id="+this.props.client.id+" render");
    const FIO = this.state.FIO;
    
    return (
      <div className='MobileClient'>
        <div className='MobileClientFIO'>
          <span>{FIO.fam+" "+FIO.im+" "+FIO.otch}</span>
        </div>
        <div className='MobileClientBalance'>
          <button>-</button>
          <span>{this.state.balance}</span>
          <button>+</button>
        </div>
        <div className='MobileClientStatus'>
          {
            this.state.isActive
            ?
            'Активен'
            :
            'Заблокирован'
          }
        </div>
        <div className='MobileClientActions'>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    );

  }

}

export default MobileClient;
