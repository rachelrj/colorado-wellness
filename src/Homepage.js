import React from 'react';
import {default as config} from './config';
import Listing from './Listing';
import BlogPost from './BlogPost';
import Footer from './Footer';
import Header from './Header';
import blog from './img/blog-icon-optimized.png';
import img from './img/change.jpeg';
import { Pagination } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from "./redux/store";
import getComponents from "./redux/reducer"
import {connect} from "react-redux"

class Homepage extends React.Component {
    state = {
        isLoading: true,
        cities: [],
        error: null
    }

    constructor(props) {
        super(props);
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

        let active = 2;
        let items = [];
        for (let number = 1; number <= 5; number++) {
            items.push(
                <Pagination.Item key={number} active={number === active}>
                    {number}
                </Pagination.Item>,
            );
        };
        let listings = [];
        this.props.components.map((component, index) => {
            listings.push(
                <Listing    key={component.id}
                            name={component.name}
                            description={component.description}
                />
            )
        });

        return (
            <Provider store = {store}>
                <Header/>
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
                        <h2>Drug and Alcohol Treatment, Rehabilitation, Support, & Aftercare Services</h2>
                        <p>
                            The Health and Wellness relevant drug and alcohol treatment, rehabilitation, support, & aftercare services directory allows users to search, find, interact with and engage appropriate drug and alcohol support services. The directory aims to meet the needs of distressed people seeking relevant information, strategies, potential solutions and support.
                        </p>
                        <hr/>
                        {listings}
                        <hr/>
                        <div className="paginationContainer">
                            <Pagination>{items}</Pagination>
                        </div>
                    </div>
                </div>
                <Footer/>
            </Provider>
        );
    }
}

const mapStateToProps = state => {
    const components = getComponents(state);
    return {components};
};
export default connect(mapStateToProps)(Homepage);
