import React from 'react';
import {default as config} from './config';
import Footer from './Footer';
import Header from './Header';
import img from './img/under-construction.png';
import health from './img/healthandwellness.jpg'

class UnderConstruction extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    getBlogPosts() {
    }

    render() {

        return (
            <div>
                <Header additionalClass="headerUnderConstruction"/>             
                <h1>Victoria Health & Wellness Collective</h1>
                <div className="bodyHolder">
                    <div className="construction">
                    <br/>
                    <br/>
                    <p>We are currently working on building the health and wellness directory</p>
                    <img className="construc-img" src={health}/>
                    <br/>
                    <p>The health and wellness relevant service directory allows users to search, find, interact with and engage appropriate, professional, accredited services to improve their health, happiness, and wellbeing. The directory aims to meet the needs of people seeking relevant information, strategies, potential solutions and support for themselves and their families.</p>
                    <br/>
                    <p>If you would like to become a member of the health and wellness directory, or would like to inquire about adding a listing for your business or organization, please contact us via test@healthandwellness.institute.com.au</p>
                    <br/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default UnderConstruction;
