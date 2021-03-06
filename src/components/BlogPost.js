import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import DOMPurify from 'dompurify'; 
import { getMonthString, convertTitleToUrl } from '../helpers';


class BlogPost extends React.Component {

    render() {
        let dateString = getMonthString(this.props.month) + " " + this.props.day + ', ' + this.props.year;

        var clean = DOMPurify.sanitize(this.props.content);

        const blogHref = "/blog/" + convertTitleToUrl(this.props);

        return (
            <React.Fragment>
              {this.props &&
                <a className="blogPost" href={blogHref}>
                    <img className="blogPostImg" src={this.props.imgSrc}/>
                    <h3>{this.props.title}</h3>
                    <p className="authorName">{this.props.name}</p>
                    <p className="date">{dateString}</p>
                </a>
              }
            </React.Fragment>
        );
    }
}

export default BlogPost;