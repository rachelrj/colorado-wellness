import React from 'react';
import Listing from '../components/Listing';
import BlogPost from '../components/BlogPost';
import Footer from '../components/Footer';
import Header from '../components/Header';
import hollistic from '../img/hollistic_600x300.jpg';
import fitness from '../img/fitness_600x300.jpg';
import nutrition from '../img/shutterstock_1513976642.jpg'
import { Provider } from 'react-redux';
import store from "../redux/store";
import getComponents from "../redux/reducer";
import {connect} from "react-redux";
import { getBlogPosts } from '../helpers';

class Homepage extends React.Component {

    getBlogPosts() {
        let blogs = getBlogPosts(this.props.blogs, 3)
        let blogPosts = [];
        blogs.map((blog) => {
            blogPosts.push(
                <BlogPost   
                            key={blog.id}
                            id={blog.id}
                            title={blog.title}
                            name={blog.authorName}
                            day={blog.day}
                            month={blog.month}
                            year={blog.year}
                            content={blog.content}
                            categories={blog.categories}
                            imgSrc={blog.img}
                />
            )
        });
        return blogPosts;
    }

    render() {
        let listings = [];
        this.props.providers.map((component, index) => {
            listings.push(
                <Listing    key={component.id}
                            name={component.name}
                            description={component.description}
                />
            )
        });
        let blogs = this.getBlogPosts();

        return (
            <Provider store = {store}>
                <Header additionalClass="mainHeader"/>
                <h1>Colorado Health & Wellness Collective</h1>
                <div className="bodyHolder">
                    <div className="description">
                        <p>Cupcake ipsum dolor sit amet. Tootsie roll fruitcake pie fruitcake chocolate cake carrot cake ice cream marzipan. Jelly beans cheesecake tart danish bear claw soufflé bear claw pudding chocolate bar. Donut bear claw chupa chups marzipan sugar plum donut.</p>
                        <p>Candy lemon drops croissant danish jelly beans. Lollipop soufflé muffin sesame snaps bonbon chocolate bar jelly-o chocolate cake. Liquorice cookie chocolate marzipan. Cookie candy brownie sesame snaps.</p>
                    </div>
                    <div className="listingsDiv">
                        <h2>Reviews</h2>
                        <hr/>
                        <a href="/colorado-fitness">
                        <div className="listingDiv">
                            <div className="overlay"></div>
                            <img src={fitness} className="serviceImg" width="600px"/>
                            <div className="centered">Physical Fitness</div>
                        </div>
                        </a>
                        <a href="/under-construction">
                        <div className="listingDiv">
                            <div className="overlay"></div>
                            <img src={hollistic} className="serviceImg" width="600px"/>
                            <div className="centered">Holistic Practices</div>
                        </div>
                        </a>
                        <a href="/under-construction">
                        <div className="listingDiv">
                            <div className="overlay"></div>
                            <img src={nutrition} className="serviceImg" width="600px"/>
                            <div className="centered">Nutrition</div>
                        </div>
                        </a>
                    </div>
                    <div className="blogDiv">
                        <h2>Blog Posts</h2>
                        <hr/>
                        {blogs}
                    </div>
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
    blogs: components.BLOGS
  }
};
export default connect(mapStateToProps)(Homepage);

