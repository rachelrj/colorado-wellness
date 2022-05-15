import React from 'react';
import FitnessServices from '../../pages/FitnessServices';
import {configure, shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('FitnessServices ', () => {  
    let store;

    const providers = [{
        'id': 1,
        'name': 'F45 Boulder',
        'description': '<p>F45 Training is a global fitness community specializing in innovative, high-intensity group workouts that are fast, fun, and results-driven.</p><p>It is specifically designed to provide a functional full-body workout while improving energy levels, metabolic rate, strength, and endurance.</p><p>F45 is one of the most time-efficient ways of training. We aim to burn up to 750 calories per 45-minute session.</p>',
        'phone': '13034953377',
        'email': 'centralboulder@f45training.com',
        'website': 'https://f45training.com/centralboulder/home',
        'address': '1750 29th St Suite 2020, Boulder, CO 80301',
        'location': {
            'lat': 40.017520,
            'long': -105.254830
        },
        'categories': [0],
        'subcategories': [2,3,5,9],
        'imgSource': '../img/f45-boulder.png',
        'headerSource': '../img/f45-boulder-long.jpeg',
        'creds': ['5+ Years in Business'],
        'city': ['Boulder'],
    }, {
        'id': 2,
        'name': 'CorePower',
        'description': '<p>CorePower Yoga shares the transformative power of yoga with every mind, every body, everywhere. With almost 200 locations in 21 states and virtual livestreaming and video on-demand classes, we offer a physically intense workout that is rooted in the mindfulness of yoga.</p>',
        'phone': '13038639642',
        'email': 'customerexperience@corepoweryoga.com',
        'website': 'https://www.corepoweryoga.com/',
        'location': {
        },
        'categories': [0],
        'subcategories': [1,3,6,9],
        'imgSource': '../img/corepower.png',
        'headerSource': '../img/corepower-boulder.jpg',
        'creds': ['20+ Years in Practice'],
        'city': ['Boulder'],
    }];

    const subcats = [
        {
            'id': 1,
            'name': 'Yoga',
            'mainCat': 0
        },{
            'id': 2,
            'name': 'HIIT',
            'mainCat': 0,

        },{
            'id': 3,
            'name': 'Stretch',
            'mainCat': 0,
        },{
            'id': 4,
            'name': 'Climbing',
            'mainCat': 0,
        },{
            'id': 6,
            'name': 'Recovery',
            'mainCat': 0,
        },{
            'id': 8,
            'name': 'Aerial',
            'mainCat': 0,
        },{
            'id': 9,
            'name': 'Strength',
            'mainCat': 0,
        }, {
            'id': 10,
            'name': 'Running',
            'mainCat': 0,
        }
    ];

    beforeEach(() => {
      store = mockStore({ PROVIDERS: providers, SUBCATEGORIES: subcats});
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Renders fitness services without crashing', () => {
    	shallow(<FitnessServices store={store}/>);
    });

    it('Renders correct information', () => {
        let wrapper = mount(<FitnessServices store={store}/>);

        expect(wrapper.find('Header').exists()).toBeTruthy();
        expect(wrapper.find('h1').text()).toEqual('Fitness Memberships & Events');
        expect(wrapper.find('.btn-group-toggle').children().length).toEqual(8);
        expect(wrapper.find({ href: '/colorado-fitness/2' }).exists()).toBeTruthy();
        expect(wrapper.find({ href: '/colorado-fitness/1' }).exists()).toBeTruthy();
        expect(wrapper.find('Footer').exists()).toBeTruthy(); 
    });

    it.skip('Selects category', () => {
    	let wrapper = mount(<FitnessServices store={store}/>);

        // const togglebuttongroup = wrapper.find('ToggleButtonGroup')
        const yogaButton = wrapper.find({children: "Yoga"})

        yogaButton.simulate('change', {target: {val: 0}});

        expect(wrapper.find({ href: '/colorado-fitness/2' }).exists()).toBeTruthy();
        expect(wrapper.find({ href: '/colorado-fitness/1' }).exists()).toBeFalsy();
    });
});
