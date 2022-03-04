import React from 'react';
import { expect } from 'chai';
import Header from '../../components/Header';
import {configure, shallow, mount } from 'enzyme';


describe('Review ', () => {
	it('Renders blog without crashing', () => {
    	shallow(<Header/>);
    });

    it('Renders correct information', () => {
    	let wrapper = mount(<Header/>);

        expect((wrapper.find('.navbar-brand')).text()).to.equal('Health & Wellness Collective');
        expect((wrapper.find('.navbar-brand')).props().href).to.equal('/');
        expect((wrapper.find('.nav-link').first()).text()).to.equal('Home');
        expect((wrapper.find('.nav-link').first()).props().href).to.equal('/');
        expect((wrapper.find('.nav-link').last()).text()).to.equal('Join the Collective');
        expect((wrapper.find('.nav-link').last()).props().href).to.equal('/join-collective');
        expect((wrapper.find({ href: '/blog/What-Is-Red-Light-Therapy' }))).to.exist;
        expect((wrapper.find('.dropdown-toggle').first()).text()).to.equal('Health and Wellness');
        expect((wrapper.find({ href: '/colorado-fitness' }))).to.exist;
        expect((wrapper.find({ href: '/under-construction' }))).to.exist;

    });

});
