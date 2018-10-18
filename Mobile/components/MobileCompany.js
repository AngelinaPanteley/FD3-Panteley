import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients: PropTypes.arrayOf(
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
    clients: this.props.clients.map((c) => {
      c.isShown = true;
      return c;
    }),
  };

  setName = (e) => {
    this.setState({ name: e.target.value });
  };

  setClientBalance = (clientId, newBalance) => {
    let changed = false;
    let newClients = [...this.state.clients];
    newClients.forEach((c, i) => {
      if (c.id == clientId) {
        let newClient = { ...c };
        newClient.balance = newBalance;
        newClients[i] = newClient;
        changed = true;
      }
    });
    if (changed)
      this.setState({ clients: newClients });
  };

  setClientFIO = (clientId, newFIO) => {
    let changed = false;
    let newClients = [...this.state.clients];

    newClients.forEach((c, i) => {
      if (c.id == clientId && (c.fam !== newFIO.fam || c.im !== newFIO.im || c.otch !== newFIO.otch)) {
        let newClient = { ...c };
        newClient.fam = newFIO.fam;
        newClient.im = newFIO.im;
        newClient.otch = newFIO.otch;
        newClients[i] = newClient;
        changed = true;
      }
    });
    if (changed)
      this.setState({ clients: newClients });
  };

  deleteClient = (clientId) => {
    let newClients = [...this.state.clients];
    newClients.forEach((c, i) => {
      if (c.id == clientId) {
        newClients.splice(i, 1);
        return;
      }
    });
    this.setState({ clients: newClients });
  };

  addClient = () => {
    const currentClients = this.state.clients;
    const newClientId = currentClients.length === 0? 1 : currentClients[currentClients.length - 1].id + 1;
    const newClients = [...this.state.clients];
    const newClient = {
      id: newClientId,
      fam: '',
      im: '',
      otch: '',
      balance: this.state.filter === 'blocked'? -1 : 0,
      isEdit: true,
      isShown: true,
    }
    newClients.push(newClient);
    this.setState({ clients: newClients });
  }

  filterClients = (e) => {
    const newFilter = e.target.value;
    if (newFilter !== this.state.filter) {
      let newClients = [...this.state.clients];
      let changed = false;

      const changeFlag = (c, i, flagValue) => {
        const newClient = { ...c };
        newClient.isShown = flagValue;
        newClients[i] = newClient;
        changed = true;
      };

      if (newFilter === 'all') {
        newClients.forEach((c, i) => {
          if (!c.isShown) {
            changeFlag(c, i, true);
          }
        });
      } else if (newFilter === 'active') {
        newClients.forEach((c, i) => {
          if (c.balance >= 0 && !c.isShown) {
            changeFlag(c, i, true);
          } else if (c.balance < 0 && c.isShown) {
            changeFlag(c, i, false);
          }
        });
      } else if (newFilter === 'blocked') {
        newClients.forEach((c, i) => {
          if (c.balance >= 0 && c.isShown) {
            changeFlag(c, i, false);
          } else if (c.balance < 0 && !c.isShown) {
            changeFlag(c, i, true);
          }
        });
      }

      this.setState({
        filter: newFilter,
      });

      if (changed) {
        this.setState({
          clients: newClients,
        });
      }
    }
  }

  render() {

    console.log("MobileCompany render");

    const clients = this.state.clients.map(client => {
      return <MobileClient key={client.id}
        client={client}
        onDelete={this.deleteClient}
        onFIOChange={this.setClientFIO}
        onBalanceChange={this.setClientBalance} />
    });

    return (
      <div className='MobileCompany'>
        <div className="MobileCompanyChangeTitle">
          <div>
            <input type="button" value="МТС" onClick={this.setName} />
            <input type="button" value="Velcom" onClick={this.setName} />
          </div>
          <div className="NameMobileCompanyFilter">
            <label htmlFor="filter">Show</label>
            <select id="filter" value={this.state.filter} onChange={this.filterClients}>
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="blocked">Blocked</option>
            </select>
          </div>
        </div>
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <div className='MobileCompanyClients'>
          {clients}
        </div>
        <button className="MobileNewClientButton" onClick={this.addClient}>
          Add new client
        </button>
      </div>
    );

  }

}

export default MobileCompany;
