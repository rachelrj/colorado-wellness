import React from 'react';
import { expect } from 'chai';
import Listing from '../../components/Listing';
import {configure, shallow, mount } from 'enzyme';


describe('Listing ', () => {
	const listing = {
        'id': 2,
        'name': 'CorePower',
        'description': 'CorePower Yoga shares the transformative power of yoga with every mind, every body, everywhere.',
        'phone': '13038639642',
        'email': 'customerexperience@corepoweryoga.com',
        'website': 'https://www.corepoweryoga.com/',
        'location': {
        },
        'categories': [0],
        'subcategories': [1,3,6,9],
        'imgSource': '../img/corepower.png',
        'creds': ['20+ Years in Practice']
    }
    
    it('Renders blog without crashing', () => {
    	shallow(<Listing/>);
    });

    it('Renders correct information', () => {
        const href = "/colorado-fitness/" + listing.id;
    	let wrapper = mount(<Listing                            
                                key={listing.id}
                                name={listing.name}
                                description={listing.description}
                                img={listing.imgSource}
                                href={href}/>);

        expect((wrapper.find('h2')).text()).to.equal(listing.name);        
        expect(wrapper.find('img').prop('src')).to.equal(listing.imgSource);
        expect(wrapper.text()).to.contain('CorePower Yoga shares the transformative power of yoga with every mind, every body, everywhere.');
        expect((wrapper.find('a')).at(0).props().href).to.equal(href);
    });
});
