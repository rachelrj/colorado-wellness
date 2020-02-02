import React from 'react';
import {default as config} from './config';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


class BlogPost extends React.Component {
    state = {

    }

    componentDidMount() {

    }

    getData() {

    }

    render() {

        return (
            <a className="blogPost" href="/blog">
                <img src="https://via.placeholder.com/200x100.png"/>
                <h3>Blog Post Title</h3>
                <a className="authorName" href="/blog">Author Name</a>
                <p className="date">Jan 20, 2020</p>
                <p>We need to button up our approach. Peel the onion proceduralize the right info at the right time to the right people for timeframe. Upsell we don't want to boil the ocean. Productize that ipo will be a game-changer</p>
                <a className="readMore" href="/blog">Read More ></a>
            </a>
        );
    }
}

export default BlogPost;