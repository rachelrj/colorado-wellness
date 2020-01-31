import React from 'react';
import {default as config} from './config';
import Listing from './Listing';
import BlogPost from './BlogPost';
import Footer from './Footer';
import blog from './img/blog-icon-optimized.png';

class Homepage extends React.Component {
    state = {
        isLoading: true,
        cities: [],
        error: null
    }

    componentDidMount() {
        // this.getData();
    }

    getData() {
        // fetch(config.BACKEND_SERVICE)
        //     .then(response => response.json())
        //     .then(data =>
        //         this.setState({
        //             cities: data.cities,
        //             isLoading: false,
        //         })
        //     )
        //     .catch(error =>
        //         this.setState({
        //             error,
        //             isLoading: false
        //         })
        //     );
    }

    render() {
        const {isLoading, cities, error} = this.state;

        return (
            <div>
                <img className="header"/>
                <h1>Victoria Health & Wellness Collective</h1>
                <div className="bodyHolder">
                    <div className="description">
                        <p>Cupcake ipsum dolor sit amet. Tootsie roll fruitcake pie fruitcake chocolate cake carrot cake ice cream marzipan. Jelly beans cheesecake tart danish bear claw soufflé bear claw pudding chocolate bar. Donut bear claw chupa chups marzipan sugar plum donut.</p>
                        <p>Candy lemon drops croissant danish jelly beans. Lollipop soufflé muffin sesame snaps bonbon chocolate bar jelly-o chocolate cake. Liquorice cookie chocolate marzipan. Cookie candy brownie sesame snaps.</p>
                    </div>
                    <div className="blogDiv">
                        <h2>Recent Posts</h2>
                        <hr/>
                        <BlogPost/>
                        <BlogPost/>
                    </div>
                    <div className="listingsDiv">
                        <h2>Addiction Services</h2>
                        <hr/>
                        <Listing/>
                        <Listing/>
                        <Listing/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Homepage;