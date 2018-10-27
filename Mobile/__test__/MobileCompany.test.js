"use strict";

import React from 'react';
import renderer from 'react-test-renderer';
import { expect as chaiExpect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.1';

import MobileCompany from '../components/MobileCompany';

configure({ adapter: new Adapter() });

describe('>>>MobileCompany', () => {

  //SNAPSHOTS

  let companyName = 'Velcom';
  let clientsArr = [
    { id: 101, fam: "Иванов", im: "Иван", otch: "Иванович", balance: 2 },
    { id: 105, fam: "Сидоров", im: "Сидор", otch: "Сидорович", balance: 3 },
    { id: 110, fam: "Петров", im: "Пётр", otch: "Петрович", balance: -1 },
    { id: 120, fam: "Григорьев", im: "Григорий", otch: "Григорьевич", balance: 5 },
  ];

  const companyComponent = <MobileCompany name={companyName} clients={clientsArr} />;

  const component = renderer.create(companyComponent);

  it('renders company correctly', () => {
    let componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();
  });

  let companyName2 = 'MTC';
  let clientsArr2 = [];

  const companyComponent2 = <MobileCompany name={companyName2} clients={clientsArr2} />;

  const component2 = renderer.create(companyComponent2);

  it('renders empty array correctly', () => {
    let componentTree = component2.toJSON();
    expect(componentTree).toMatchSnapshot();
  });

  //SHALLOW RENDERING

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(companyComponent);
  });

  it('renders company`s name', () => {
    chaiExpect(wrapper.contains(<div className='MobileCompanyName'>Компания &laquo;{companyName}&raquo;</div>)).to.equal(true);
  });

  it('deletes client correctly', () => {
    wrapper.instance().deleteClient(101);
    expect(wrapper.state('clients').length).toEqual(3);
    expect(wrapper.state('clients')[0].id).toEqual(105);
  });

  it('sets client`s balance correctly', () => {
    wrapper.instance().setClientBalance(101, -1);
    expect(wrapper.state('clients')[0].balance).toEqual(-1);
  });

  it('sets client`s FIO correctly', () => {
    wrapper.instance().setClientFIO(101, {
      fam: 'new fam',
      im: 'new im',
      otch: 'new otch',
    });
    expect(wrapper.state('clients')[0].fam).toEqual('new fam');
    expect(wrapper.state('clients')[0].im).toEqual('new im');
    expect(wrapper.state('clients')[0].otch).toEqual('new otch');
  });

  it('adds new client correctly', () => {
    wrapper.instance().addClient();
    const clients = wrapper.state('clients');
    expect(clients.length).toEqual(5);
    expect(clients[clients.length-1].id).toEqual(121);
    expect(clients[clients.length-1].isEdit).toEqual(true);
  });

  it('filter clients correctly', () => {
    const event = {
      target: {
        value: 'active',
      }
    }

    wrapper.instance().filterClients(event);
    expect(wrapper.state('filteredClients').length).toEqual(3);
    
    event.target.value = 'blocked';
    wrapper.instance().filterClients(event);
    expect(wrapper.state('filteredClients').length).toEqual(1);
  });

});
