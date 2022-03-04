import React from 'react';
import { expect } from 'chai';
import Review from '../../components/Review';
import {configure, shallow, mount } from 'enzyme';


describe('Review ', () => {
	const listing = {
		'review': 'Sample review',
		'rating': 10,
		'name': 'Rachel Joyce'
	}
    
    it('Renders review without crashing', () => {
    	shallow(<Review/>);
    });

    it('Renders correct information', () => {
    	let wrapper = mount(<Review review={listing}/>);

        expect((wrapper.find('h2')).text()).to.equal('Rachel Joyce');
    	expect(wrapper.find('h3').hasClass('green')).to.equal(true);
        expect((wrapper.find('h3')).text()).to.equal('10/10');
        expect(wrapper.text()).to.contain('Sample review');
    })

});
