import React from 'react';
import getComponents from "../redux/reducer";
import {connect} from "react-redux";
import DOMPurify from 'dompurify'; 


class ServiceProvider extends React.Component {

    constructor(props){ 
        super(props);
        this.listing = this.props.review
    }

    getColor() {
        if(this.listing && this.listing.rating >= 8) {
            return "green";
        }
        else if(this.listing && this.listing.rating >=6) {
            return "orange"
        }
        else {
            return "red"
        }
    }


    render() {

        this.color = this.getColor();
        if (!!this.listing) {
            var clean = DOMPurify.sanitize(this.listing.review);
        }

        return(
            <div className="review">
                <h2>{(!!this.listing) && this.listing.name}</h2>
                <h3 className={this.color}>{(!!this.listing) && this.listing.rating}/10</h3>
                { (!!clean) && <p dangerouslySetInnerHTML={{__html: clean}}></p>}
            </div>
        )
    }
}

export default ServiceProvider;
