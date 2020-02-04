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
import DOMPurify from 'dompurify'; 


class BlogPost extends React.Component {
    state = {

    }

    componentDidMount() {

    }

    getData() {

    }

    render() {

        let dateString = '';
        switch(this.props.month) {
          case 1:
            dateString = dateString + 'Jan ';
            break;
          case 2:
            dateString = dateString + 'Feb ';
            break;
          case 3:
            dateString = dateString + 'March ';
            break;          
          case 4:
            dateString = dateString + 'April ';
            break;
          default:
            break;
        }
        dateString = dateString + this.props.day + ', ' + this.props.year;

        var clean = DOMPurify.sanitize(this.props.content);

        return (
            <a className="blogPost" href="/blog">
                <img className="blogPostImg" src={this.props.imgSrc}/>
                <h3>{this.props.title}</h3>
                <a className="authorName" href="/blog">{this.props.name}</a>
                <p className="date">{dateString}</p>
                <div className="blogPostContent" dangerouslySetInnerHTML={{__html: clean}}></div>
                <a className="readMore" href="/blog">Read More ></a>
            </a>
        );
    }
}

export default BlogPost;