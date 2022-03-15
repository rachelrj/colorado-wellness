import React from 'react';
import { expect } from 'chai';
import Footer from '../../components/Footer';
import {configure, shallow, mount } from 'enzyme';


describe('Footer ', () => {
	it('Renders footer without crashing', () => {
    	shallow(<Footer/>);
    });

    it('Renders correct information', () => {
    	let wrapper = mount(<Footer/>);

        expect((wrapper.find('.copyRight')).text()).to.equal('COPYRIGHT © 2022 AWAKEN YOUR WELL - ALL RIGHTS RESERVED.');
        expect((wrapper.find('.socialImg')).length).to.equal(4);
        expect((wrapper.find({ src: '../img/facebook.png' }))).to.exist;
        expect((wrapper.find({ src: '../img/linkedin.png' }))).to.exist;
        expect((wrapper.find({ src: '../img/email-icon-optimized.png' }))).to.exist;
        expect((wrapper.find({ src: '../img/instagram.png' }))).to.exist;
    });
});
