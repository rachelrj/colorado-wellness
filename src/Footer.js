import React from 'react';
import {default as config} from './config';
import blog from './img/blog-icon-optimized.png';
import facebook from './img/facebook.png';
import linkedin from './img/linkedin.png';
import email from './img/email-icon-optimized.png';
import phone from './img/phone-512.png';



class Footer extends React.Component {
    state = {

    }

    componentDidMount() {

    }

    getData() {

    }

    render() {

        return (
            <div className="footer">
                <div className="socialDiv">
                <img className="socialImg" id="phone" src={phone}/>
                <img className="socialImg" id="email" src={email}/>
                <img className="socialImg" src={blog}/>
                <img className="socialImg" src={facebook}/>
                <img className="socialImg" src={linkedin}/>
                </div>
                <p className="copyRight">COPYRIGHT © 2020 HEALTH & WELLNESS COLLECTIVE VICTORIA - ALL RIGHTS RESERVED.</p>
            </div>
        );
    }
}

export default Footer;