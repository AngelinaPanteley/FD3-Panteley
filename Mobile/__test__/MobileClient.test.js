"use strict";

import React from 'react';
import renderer from 'react-test-renderer';
import { expect as chaiExpect} from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.1';

import MobileClient from '../components/MobileClient.js';

configure({ adapter: new Adapter() });

describe('>>>MobileClient', () => {

  //SNAPSHOTS

  const client = {
    id: 1,
    fam: 'some fam',
    im: 'some im',
    otch: 'some otch',
    balance: 0,
    isEdit: false,
  };

  const clientComponent = <MobileClient client={client} onDelete={() => { }}
    onFIOChange={() => {}}
    onBalanceChange={() => {}} />;

  const component = renderer.create(clientComponent);

  it('renders client correctly', () => {
    let componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();
  });

  const client2 = {
    id: 222,
    fam: 'some fam2',
    im: 'some im2',
    otch: 'some otch2',
    balance: 222,
    isEdit: true,
  };

  const clientComponent2 = <MobileClient client={client2} onDelete={() => { }}
    onFIOChange={() => {}}
    onBalanceChange={() => {}} />;

  const component2 = renderer.create(clientComponent2);

  it('renders editable client correctly', () => {
    let componentTree = component2.toJSON();
    expect(componentTree).toMatchSnapshot();
  });

  //SHALLOW RENDERING

  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(clientComponent);
  });

  it('renders client`s id', () => {
    chaiExpect(wrapper.contains(<span className="MobileClientId">{client.id}</span>)).to.equal(true);
  });

  it('renders client`s fio', () => {
    chaiExpect(wrapper.find('.MobileClientFio')).to.have.lengthOf(1);
  });

  it('renders client`s balance', () => {
    chaiExpect(wrapper.find('.MobileClientBalance')).to.have.lengthOf(1);
  });

  it('renders client`s status', () => {
    chaiExpect(wrapper.find('.MobileClientStatus')).to.have.lengthOf(1);
  });

});
