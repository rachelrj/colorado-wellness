import React from 'react';
import {default as config} from './config';
import img from './img/photo-placeholder.png';


class Listing extends React.Component {
    state = {

    }

    componentDidMount() {

    }

    getData() {

    }

    render() {

        return (
            <div className="listing">
                <div className="listingPicture">
                    <img src={img}/>
                </div>
                <div className="listingContent">
                    <h2>Name</h2>
                    <div className="listingContentDescription">
                        <p>I love cheese, especially caerphilly cheese. Smelly cheese blue castello jarlsberg cheesecake bocconcini halloumi bavarian bergkase blue castello. Bocconcini caerphilly everyone loves red leicester cut the cheese cheese and wine dolcelatte hard cheese. Macaroni cheese.</p>
                        <p>Goat pecorino the big cheese. Boursin paneer emmental cheese strings taleggio babybel halloumi caerphilly. Emmental hard cheese goat babybel port-salut edam bocconcini cow. Mascarpone bavarian bergkase cheese slices blue castello jarlsberg squirty cheese the big cheese babybel. Mozzarella the big cheese.</p>
                    </div>
                    <a src="url" className="readMore">Learn More About Name ></a>
                </div>
            </div>
        );
    }
}

export default Listing;