import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
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

  state = {
    name: this.props.name,
    clients: this.props.clients,
  };

  constructor(props) {
    super(props);

    this.clientsForRender = this.state.clients.map( client => <MobileClient key={client.id} client={client} /> );
  };

  setName = (e) => {
    this.setState({name:e.target.value});
  };
  
  setClientBalance = (clientId,newBalance) => {
    let changed=false;
    let newClients=[...this.state.clients];
    newClients.forEach( (c,i) => {
      if ( c.id==clientId ) {
        let newClient={...c};
        newClient.balance=newBalance;
        newClients[i]=newClient;
        changed=true;
      }
    } );
    if ( changed )
      this.setState({clients:newClients}, this.clientsUpdate);
  };

  setClientFIO = (clientId,newFIO) => {
    let changed=false;
    let newClients=[...this.state.clients];
    newClients.forEach( (c,i) => {
      if ( c.id==clientId && (c.fam!==FIO.fam || c.im!==FIO.im || c.otch!==FIO.otch )) {
        let newClient={...c};
        newClient.fam=FIO.fam;
        newClient.im=FIO.im;
        newClient.otch=FIO.otch;
        newClients[i]=newClient;
        changed=true;
      }
    } );
    if ( changed ) 
      this.setState({clients:newClients}, this.clientsUpdate);
  };

  clientsUpdate(newProps, newState) {
    this.clientsForRender=newState.clients.map( client => {
      let FIO={fam:client.fam,im:client.im,otch:client.otch};
      return <MobileClient key={client.id} id={client.id} FIO={FIO} balance={client.balance} />;
    });
  }
  
  render() {

    console.log("MobileCompany render");

    return (
      <div className='MobileCompany'>
        <div className="MobileCompanyChangeTitle">
          <input type="button" value="МТС" onClick={this.setName} />
          <input type="button" value="Velcom" onClick={this.setName} />
        </div> 
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <div className='MobileCompanyClients'>
          { this.clientsForRender }
        </div>
        <button className="MobileNewClientButton">Добавить</button>
      </div>
    )
    ;

  }

}

export default MobileCompany;
