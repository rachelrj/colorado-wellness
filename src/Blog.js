import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Provider, connect } from 'react-redux';
import store from "./redux/store";
import getComponents from "./redux/reducer";
import DOMPurify from 'dompurify'; 
import STORETYPES from './redux/storeTypes';
import getMonthString from './helpers';

class Blog extends React.Component {

    getBlogTitleParam() {
        const pathname = this.props.location.pathname;
        const pathNames = pathname.split('/');
        return pathNames[pathNames.length-1];
    }

    getMostRecentArticle() {
        let mostRecentArticle;
        this.props.blogs.map((blog, index) => {
            if (!mostRecentArticle) {
                mostRecentArticle = blog;
            }
            else if((blog.year > mostRecentArticle.year) || 
                (blog.year == mostRecentArticle.year && blog.month > mostRecentArticle.month) ||
                (blog.year == mostRecentArticle.year && blog.month == mostRecentArticle.month && blog.day > mostRecentArticle.day)) {
                mostRecentArticle = blog;
            }
        })
        return mostRecentArticle;
    }

    getArticleByTitle(title) {
        if(title) {
            return this.props.blogs.filter(obj => {
                return obj.title.replace(/[.,\/#!$%?\^&\*;:{}=\-_`~()]/g,"").split(' ').join('-') == title;
            })[0];
        } else {
            return this.getMostRecentArticle();
        }
    }

    convertTitleToUrl(post) {
        return post.title.replace(/[.,\/#!$%?\^&\*;:{}=\-_`~()]/g,"").split(' ').join('-');
    }

    getPastMonthTitleString(minus) {
        const date = this.getPastMonth(minus);
        return getMonthString(date.getMonth()+1) + ", " + date.getFullYear();
    }

    getPastMonth(minus) {
        const x = new Date();
        x.setDate(1);
        x.setMonth(x.getMonth()-minus);
        return x;
    }

    getPostsForMonth(minus, currentPost) {
        const date = this.getPastMonth(minus);
        const mm = date.getMonth() + 1;
        const yyyy = date.getFullYear();

        let otherPosts = [];

        this.props.blogs.map((post, index) => {
            if(post.month == mm && post.id != currentPost.id) {
                const blogHref = "/blog/" + this.convertTitleToUrl(post);
                otherPosts.push(
                    <a className="readMoreBlog" href={blogHref}>{post.title}</a>
                )
            }
        });

        return otherPosts;
    }

    render() {
        const articleTitle = this.getBlogTitleParam();
        const article = this.getArticleByTitle(articleTitle);

        let dateString = getMonthString(article.month) + " " + article.day + ', ' + article.year;

        var clean = DOMPurify.sanitize(article.content);

        let categories = [];
        article.categories.map((cat, index) => {
            categories.push(
                <div className="category">
                    {cat}
                </div>
            )
        });

        let otherPostsCurrentMonth = this.getPostsForMonth(0, article);
        let otherPostsCurrentMonthMinusOne = this.getPostsForMonth(1, article);
        let otherPostsCurrentMonthMinusTwo = this.getPostsForMonth(2, article);

        let providerLink;

        if (article.provider) {
            if (article.providerCat === STORETYPES[1]) {
                providerLink = "/colorado-fitness";
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
                            otherPostsCurrentMonthMinusTwo.length>0 &&
                            <div>
                            <h3>{this.getPastMonthTitleString(2)}</h3>
                            
                            {otherPostsCurrentMonthMinusTwo}
                            </div>
                        }
                        {
                            otherPostsCurrentMonthMinusOne.length>0 &&
                            <div>
                            <h3>{this.getPastMonthTitleString(1)}</h3>
                            
                            {otherPostsCurrentMonthMinusOne}
                            </div>
                        }
                        {
                            otherPostsCurrentMonth.length>0 &&
                            <div>
                            <h3>{this.getPastMonthTitleString(0)}</h3>
                            
                            {otherPostsCurrentMonth}
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
