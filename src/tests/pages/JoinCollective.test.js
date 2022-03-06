import React from 'react';
import JoinCollective from '../../pages/JoinCollective';
import {configure, shallow, mount } from 'enzyme';


describe('JoinCollective ', () => {  
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Renders review without crashing', () => {
    	shallow(<JoinCollective/>);
    });

    it('Renders correct information', () => {
    	let wrapper = mount(<JoinCollective/>);

        expect(wrapper.find('Header').props().additionalClass).toEqual('joinCollective');
        expect(wrapper.find('Form').exists()).toBeTruthy();
        expect(wrapper.find('Footer').exists()).toBeTruthy();  
    });

    it('Calls handle submit', () => {
    	let wrapper = mount(<JoinCollective/>);
	    const form = wrapper.find('form#join-collective-form');
		expect(wrapper.state('submitted')).toEqual(false);
	    
	    form.simulate('submit')
	    
	    expect(wrapper.state('submitted')).toEqual(true);
    	expect((wrapper.find('h2')).text()).toEqual('Thank you! We will get back to you within a few business days.');
    });
});
