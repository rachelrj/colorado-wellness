import React from 'react';
import {default as config} from './config';
import img from './img/photo-placeholder.png';
import DOMPurify from 'dompurify'; 


class Listing extends React.Component {
    state = {

    }

    componentDidMount() {

    }

    getData() {

    }

    render() {

        var clean = DOMPurify.sanitize(this.props.description);

        return (
            <div className="listing">
                <div className="listingPicture">
                    <img src={img}/>
                </div>
                <div className="listingContent">
                    <h2>{this.props.name}</h2>
                    <div className="listingContentDescription" dangerouslySetInnerHTML={{__html: clean}}>
                    </div>
                    <a src="url" className="readMore">Learn More About {this.props.name} ></a>
                </div>
            </div>
        );
    }
}

export default Listing;