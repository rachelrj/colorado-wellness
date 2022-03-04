import React from 'react';
import App from '../App';
import {configure, shallow} from 'enzyme';

describe('App ', () => {
    it('Renders app without crashing', () => {shallow( < App / >);});
});
