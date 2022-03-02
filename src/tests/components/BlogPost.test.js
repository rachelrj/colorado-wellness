import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import BlogPost from '../../components/BlogPost';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow, mount } from 'enzyme';


describe('Review ', () => {
	configure({adapter: new Adapter()});

	const blog = {
    'id': 3,
    'title': 'Sample Blog Title',
    'authorName': 'Rachel Joyce',
    'content': 'Holy shit what a great blog post.',
    'month': 2,
    'day': 10,
    'year': 2022,
    'categories': [
        'wow',
        'super cool',
    ]
    }
    
    it('Renders blog without crashing', () => {
    	shallow(<BlogPost/>);
    });

    it('Renders correct information', () => {
    	let wrapper = mount(<BlogPost                             
                            id={blog.id}
                            title={blog.title}
                            name={blog.authorName}
                            day={blog.day}
                            month={blog.month}
                            year={blog.year}
                            content={blog.content}
                            categories={blog.categories}/>);

        expect((wrapper.find('h3')).text()).to.equal('Sample Blog Title');

        expect((wrapper.find('.authorName')).text()).to.equal('Rachel Joyce');

        expect(wrapper.text()).to.contain('Holy shit what a great blog post.');

        expect((wrapper.find('.date')).text()).to.equal('Feb 10, 2022');

        expect((wrapper.find('a')).at(0).props().href).to.equal('/blog/Sample-Blog-Title');

    });

});