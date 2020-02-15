import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Provider, connect } from 'react-redux';
import store from "./redux/store";
import getComponents from "./redux/reducer";
import DOMPurify from 'dompurify'; 
import STORETYPES from './redux/storeTypes';

class Blog extends React.Component {

    componentDidMount() {
    }

    componentWillMount() {
    }

    getBlogTitleParam() {
        const pathname = this.props.location.pathname;
        const pathNames = pathname.split('/');
        return pathNames[pathNames.length-1];
    }

    getMostRecentArticle() {
        let mostRecentArtcle;
        this.props.blogs.map((blog, index) => {
            if (!mostRecentArtcle) {
                mostRecentArtcle = blog;
            }
            else if(blog.year >= mostRecentArtcle.year && 
                blog.month >= mostRecentArtcle.month &&
                blog.day >= mostRecentArtcle.day) {
                mostRecentArtcle = blog;
            }
        })
        return mostRecentArtcle;
    }

    getArticleByTitle(title) {
        return this.props.blogs.filter(obj => {
            return obj.title.replace(/[.,\/#!$%?\^&\*;:{}=\-_`~()]/g,"").split(' ').join('-') == title;
        })[0]
    }

    render() {
        const articleTitle = this.getBlogTitleParam();
        const article = this.getArticleByTitle(articleTitle);


        let dateString = '';
        switch(article.month) {
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
        dateString = dateString + article.day + ', ' + article.year;

        var clean = DOMPurify.sanitize(article.content);

        let categories = [];
        article.categories.map((cat, index) => {
            categories.push(
                <div className="category">
                    {cat}
                </div>
            )
        });

        //Fix this
        let otherPostsJan = [];
        let otherPostsFeb = [];
        this.props.blogs.map((post, index) => {
            if(post.month == 1 && article.id != post.id) {
                const blogHref = "/blog/" + post.title.replace(/[.,\/#!$%?\^&\*;:{}=\-_`~()]/g,"").split(' ').join('-');
                otherPostsJan.push(
                    <a className="readMoreBlog" href={blogHref}>{post.title}</a>
                )
            } else if (post.month == 2 && article.id != post.id) {
                const blogHref = "/blog/" + post.title.replace(/[.,\/#!$%?\^&\*;:{}=\-_`~()]/g,"").split(' ').join('-');
                otherPostsFeb.push(
                    <a className="readMoreBlog" href={blogHref}>{post.title}</a>
                )  
            }
        });

        let providerLink;

        if (article.provider) {
            if (article.providerCat === STORETYPES[1]) {
                providerLink = "/drug-alcohol-treatment-rehabilitation-support-aftercare";
            }
            providerLink = providerLink + "/" + article.provider;
        }

        let authorImg;
        if (providerLink && article.authorImgSource) {
            authorImg = <a href={providerLink}><div className="blogAuthor">
                                    <span className="blogAuthorPicture">
                                        <img src={article.authorImgSource}/>
                                    </span>
                                </div></a>
        } else if (article.authorImgSource){
            authorImg = <div className="blogAuthor">
                        <span className="blogAuthorPicture">
                            <img src={article.authorImgSource}/>
                        </span>
                    </div>
        }




        return (
            <Provider store = {store}>
            <div className="blogPage">
                <Header additionalClass="mainHeader"/>
                <div className="bodyHolder">
                    <div className="mainBlogContent">
                        <div className="categories">
                            {categories}
                        </div>
                        <h1 className="blogPageBlogTitle">{article.title}</h1>
                            <p className="blogDate">{dateString}</p>
                            <a className="authorName" href={providerLink} >written by {article.authorName}</a>
                            {authorImg}
                            <div className="blogPagePost" dangerouslySetInnerHTML={{__html: clean}}></div>  
                    </div>
                    <div className="moreBlogsPanel">
                        <h2 className="moreBlogsPost">More Blog Posts</h2>
                        {
                            otherPostsJan.length>0 &&
                            <div>
                            <h3>Jan, 2020</h3>
                            
                            {otherPostsJan}
                            </div>
                        }
                        {
                            otherPostsFeb.length>0 &&
                            <div>
                            <h3>Feb, 2020</h3>
                            
                            {otherPostsFeb}
                            </div>
                        }
                        <p className="writeABlog">Have a health and wellness topic that you'd like to share with the community? Contact us to find out how you can contribute.
                            <a className="readMore">Write a Blog Post ></a>
                        </p>
                    </div>
                </div>
                <Footer/>
            </div>
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
export default connect(mapStateToProps)(Blog);
