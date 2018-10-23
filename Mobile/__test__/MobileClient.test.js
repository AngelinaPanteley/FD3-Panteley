"use strict";

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MobileClient from '../components/MobileClient.js';
import MobileCompany from '../components/MobileCompany.js';

configure({ adapter: new Adapter() });

describe('>>>MobileClient', () => {

  let companyName = 'Velcom';

  const client = {
    id: 1,
    fam: 'some fam',
    im: 'some im',
    otch: 'some otch',
    balance: 0,
    isEdit: false,
  };

  let clientsArr = [
    client
  ];

  const clientComponent = <MobileClient client={client} onDelete={() => { }}
    onFIOChange={() => { }}
    onBalanceChange={() => { }} />;

  const companyComponent = <MobileCompany
    name={companyName}
    clients={clientsArr}
  />;

  const component = renderer.create(
    clientComponent
  );

  let componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  //componentTree.props.onClick();

  //componentTree = component.toJSON();
  //expect(componentTree).toMatchSnapshot();


  let wrapper;
  let parentWrapper;

  beforeEach(() => {
    wrapper = shallow(clientComponent);
    parentWrapper = shallow(companyComponent);
  });

  it('should increase balance on + button click', () => {
    // wrapper.find('.MobileClientIncreaseBalance').simulate('click');
    // wrapper.setState({ fam: 'fam' });
    // wrapper.update();
    // expect(wrapper.state('balance')).toEqual(1);
    // expect(wrapper.state('isActive')).toEqual(true);
  });

  it('should decrease balance on - button click', () => {
    wrapper.instance().decreaseBalance();
    parentWrapper.update();
    expect(wrapper.instance().props.client.balance).toEqual(-1);
  });

});
