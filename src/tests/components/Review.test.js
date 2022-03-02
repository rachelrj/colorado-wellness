import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import Review from '../../components/Review';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow, mount } from 'enzyme';


describe('Review ', () => {
	configure({adapter: new Adapter()});

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