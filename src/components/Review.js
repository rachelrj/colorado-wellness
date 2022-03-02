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
        if(this.listing.rating >= 8) {
            return "green";
        }
        else if(this.listing.rating >=5) {
            return "orange"
        }
        else {
            return "red"
        }
    }


    render() {

        this.color = this.getColor();
        var clean = DOMPurify.sanitize(this.listing.review);

        return(
            <div className="review">
                <h2>{this.listing.name}</h2>
                <h3 className={this.color}>{this.listing.rating}/10</h3>
                <p dangerouslySetInnerHTML={{__html: clean}}></p>
            </div>
        )
    }
}

const mapStateToProps = state => {
  const components = getComponents(state);
  return {
    providers: components.PROVIDERS,
    reviews: components.REVIEWS,
  }
};
export default connect(mapStateToProps)(ServiceProvider);
