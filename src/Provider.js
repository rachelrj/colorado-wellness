import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Provider } from 'react-redux';
import store from "./redux/store";
import getComponents from "./redux/reducer";
import {connect} from "react-redux";
import DOMPurify from 'dompurify'; 
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import phone from './img/phone-512.png';
import email from './img/email.png';
import website from './img/www.jpeg'
import Review from './Review';

class ServiceProvider extends React.Component {


    constructor(props){ 

        super(props);

        this.pathname = this.props.location.pathname;
        this.pathNames = this.pathname.split('/');
        this.pId = this.pathNames[this.pathNames.length-1];

        this.listing = '';
        this.props.providers.map((component, index) => {
            if(component.id == this.pId) {
                this.listing = component;
            }
        });

        this.state = {
            'lat': this.listing.location.lat,
            'lng': this.listing.location.long,
            'zoom': 15,
        };

        this.creds = [];
        this.listing.creds.map((cred, index) => {
            this.creds.push(<div key={index}>{cred}</div>);
        });
        this.featuredArticles = this.findBlogs();
        this.reviews = this.findReviews();
    }

    findBlogs() {
        let blogs = [];
        this.props.blogs.map((blog, index) => {
            if(blog.provider == this.listing.id) {
                let blogHref = "/blog/" + blog.title.replace(/[.,\/#!$%?\^&\*;:{}=\-_`~()]/g,"").split(' ').join('-');
                blogs.push(
                <div key={index}>
                    <a href={blogHref}>{blog.title}</a>
                </div>
                )
            }
        })
        return blogs;
    }

    findReviews() {
        let reviews = [];
        this.props.reviews.map((review, index) => {
            if(review.provider == this.listing.id) {
                reviews.push(
                <Review key={review.id} review={review} />
                )
            }
        })
        return reviews;
    }

    render() {

        var clean = DOMPurify.sanitize(this.reviews);

        const position = [this.state.lat, this.state.lng];


        const creds = [];
        this.listing.creds.map((cred, index) => {
            creds.push(<div>{cred}</div>);
        });

        const telHref = "tel:" + this.listing.phone;
        const emailHref = "mailto:" + this.listing.email;
        const webDisplayAddress = this.listing.website.replace(/(^\w+:|^)\/\//, '');

        return (
            <Provider store = {store}>
                <Header/>
                <div className="bodyHolder">
                <br/>
                <h1>{this.listing.name}</h1>
                <div>
                    <img className="fourhundredpxheight" src={this.listing.headerSource}/>
                </div>
                <div className="blockDiv">
                <h2>Reviews</h2>
                    <div>
                        {this.reviews}
                    </div>
                </div>
                <div className="blockDiv">
                    <h2>Contact</h2>
                    <div>
                        <div className="socialBlock">
                        <a href={telHref}>
                             <img className="providerSocialImg" src={phone}/>
                        </a>
                        </div>
                        <div className="socialBlock">
                        <a href={emailHref}>
                            <img className="providerSocialImg" src={email}/>
                        </a>
                        </div>
                        <div className="socialBlock">
                        <a href={this.listing.website} target="_blank">
                             <img className="providerSocialImg" src={website}/>
                        </a>
                        </div>
                     </div>
                 </div>
                { this.listing.location.lat && 
                    <div className="blockDiv">
                    <h2>Location</h2>
                    <Map center={position} zoom={this.state.zoom}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                {this.listing.address}
                            </Popup>
                        </Marker>
                    </Map>
                    </div>
                }
                <h2>Credentials/Qualifications</h2>
                {this.creds}
                {
                    this.featuredArticles.length>0 &&
                    <div>
                        <h2>Featured Articles</h2>
                        {this.featuredArticles}
                    </div>
                }

                </div>
                <Footer/>
            </Provider>
        );
    }
}

const mapStateToProps = state => {
  const components = getComponents(state);
  return {
    providers: components.PROVIDERS,
    blogs: components.BLOGS,
    reviews: components.REVIEWS,
  }
};
export default connect(mapStateToProps)(ServiceProvider);
