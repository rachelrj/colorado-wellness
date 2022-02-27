import React from 'react';
import DOMPurify from 'dompurify'; 


class Listing extends React.Component {


    componentDidMount() {

    }

    getData() {

    }

    render() {

        var clean = DOMPurify.sanitize(this.props.description);

        return (
            <div className="listing">
                <div className="listingPicture">
                    <img src={this.props.img}/>
                </div>
                <div className="listingContent">
                    <h2>{this.props.name}</h2>
                    <div className="listingContentDescription" dangerouslySetInnerHTML={{__html: clean}}>
                    </div>
                    <a href={this.props.href} className="readMore">Learn More About {this.props.name} ></a>
                </div>
            </div>
        );
    }
}

export default Listing;