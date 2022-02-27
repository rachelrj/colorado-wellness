import React from 'react';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';
import email from '../img/email-icon-optimized.png';
import instagram from '../img/instagram.png';


class Footer extends React.Component {
    render() {

        return (
            <div className="footer">
                <div className="socialDiv">
                    <img className="socialImg" id="email" src={email}/>
                    <img className="socialImg" src={facebook}/>
                    <img className="socialImg" src={linkedin}/>
                    <img className="socialImg" id="instagram" src={instagram}/>

                </div>
                <p className="copyRight">COPYRIGHT © 2022 HEALTH & WELLNESS COLLECTIVE COLORADO - ALL RIGHTS RESERVED.</p>
            </div>
        );
    }
}

export default Footer;