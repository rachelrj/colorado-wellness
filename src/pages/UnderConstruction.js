import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

class UnderConstruction extends React.Component {

    render() {

        return (
            <div>
                <Header additionalClass="headerUnderConstruction"/>             
                <h1>Colorado Health & Wellness Collective</h1>
                <div className="bodyHolder">
                    <div className="construction">
                    <br/>
                    <br/>
                    <p>We are currently working on building the health and wellness directory</p>
                    <br/>
                    <p>The health and wellness relevant service directory allows users to search, find, interact with and engage appropriate, professional, accredited services to improve their health, happiness, and wellbeing. The directory aims to meet the needs of people seeking relevant information, strategies, potential solutions and support for themselves and their families.</p>
                    <br/>
                    <p>If you would like to become a member of the health and wellness directory, or would like to inquire about adding a listing for your business or organization, please contact us via test@healthandwellnesscolorado.com</p>
                    <br/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default UnderConstruction;
