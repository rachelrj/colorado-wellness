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
          case 5:
            dateString = dateString + 'May ';
          default:
            break;
        }
        dateString = dateString + this.props.day + ', ' + this.props.year;

        var clean = DOMPurify.sanitize(this.props.content);

        const blogHref = "/blog/" + this.props.title.replace(/[.,\/#!$%?\^&\*;:{}=\-_`~()]/g,"").split(' ').join('-');

        return (
            <a className="blogPost" href={blogHref}>
                <img className="blogPostImg" src={this.props.imgSrc}/>
                <h3>{this.props.title}</h3>
                <a className="authorName" href="/blog">{this.props.name}</a>
                <p className="date">{dateString}</p>
                <div className="blogPostContent" dangerouslySetInnerHTML={{__html: clean}}></div>
                <a className="readMore" href={blogHref}>Read More ></a>
            </a>
        );
    }
}

export default BlogPost;