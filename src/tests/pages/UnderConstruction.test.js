import React from 'react';
import { expect } from 'chai';
import UnderConstruction from '../../pages/UnderConstruction';
import {configure, shallow, mount } from 'enzyme';


describe('UnderConstruction ', () => {  
    it('Renders review without crashing', () => {
    	shallow(<UnderConstruction/>);
    });

    it('Renders correct information', () => {
    	let wrapper = mount(<UnderConstruction/>);

        expect(wrapper.find('Header').props().additionalClass).to.equal('headerUnderConstruction');
        expect(wrapper.text()).to.contain('We are currently working on building the health and wellness directory');
    });
});
