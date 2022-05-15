import React from 'react';
import BlogPost from '../components/BlogPost';
import Footer from '../components/Footer';
import Header from '../components/Header';
import hollistic from '../img/hollistic_600x300.jpg';
import fitness from '../img/fitness_600x300.jpg';
import exercise from '../img/exercise-apparel_600x300.jpg'
import rec from '../img/recreational-sports.jpg'
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
        let blogs = this.getBlogPosts();

        return (
            <Provider store = {store}>
                <Header additionalClass="mainHeader"/>
                <div className="bodyHolder">
                <h1>Awaken Your Well</h1>
                    <div className="description">
                    <p>There are so many opportunities nowadays for workout options, wellness practices, fitness groups, gym memberships, healing modalities, exercise apparel, beauty services, and nutrition advising. The Colorado Health and Wellness collective is a repository that grew from a group of people in the Boulder/Denver area who wanted to try it all!</p>
                    <p>We thought, why not share this information with others? There are places and practices on here that you may have extensive experience with, and others that you’ve never heard of. Get ours and others’ honest opinions to inform yourself on wellness communities or even to choose a new practice to start. We hope these reviews and blog posts will help you in some way on your journey. We wish you happiness, wellness and health!</p>
                    <p>And please… do let us know if you have any content to contribute to the collective.</p>

                    </div>
                        <h2>Reviews</h2>
                        <hr/>
                        <a className="reviewTile" href="/colorado-fitness">
                        <div className="listingDiv">
                            <div className="overlay"></div>
                            <img src={fitness} className="serviceImg" width="600px"/>
                            <div className="centered">Physical Fitness</div>
                        </div>
                        </a>
                        <a className="reviewTile" href="/under-construction">
                        <div className="listingDiv">
                            <div className="overlay"></div>
                            <img src={hollistic} className="serviceImg" width="600px"/>
                            <div className="centered">Holistic Practices</div>
                        </div>
                        </a>
                        <a className="reviewTile" href="/under-construction">
                        <div className="listingDiv">
                            <div className="overlay"></div>
                            <img src={rec} className="serviceImg" width="600px"/>
                            <div className="centered">Rec Sports</div>
                        </div>
                        </a>
                        <a className="reviewTile" href="/under-construction">
                        <div className="listingDiv">
                            <div className="overlay"></div>
                            <img src={exercise} className="serviceImg" width="600px"/>
                            <div className="centered">Apparel & Equipment</div>
                        </div>
                        </a>
                        <h2>Blog Posts</h2>
                        <hr/>
                        {blogs}
                </div>
                <Footer/>
            </Provider>
        );
    }
}

const mapStateToProps = state => {
  const components = getComponents(state);
  return {
    blogs: components.BLOGS
  }
};
export default connect(mapStateToProps)(Homepage);

