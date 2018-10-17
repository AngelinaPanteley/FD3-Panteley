import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';

class MobileClients extends React.PureComponent {

  static propTypes = {
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  render() {

    console.log("MobileCompany render");

    return (
        <div>
        {
            this.props.clients.map( client => {
                return <MobileClient key={client.id} client={client} onDelete={this.props.deleteClient}/> 
            })
        }
        </div>
    )
    ;

  }

}

export default MobileClients;
