import React from 'react';
import {default as config} from './config';
import Listing from './Listing';
import Footer from './Footer';
import Header from './Header';
import { Pagination } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from "./redux/store";
import getComponents from "./redux/reducer";
import STORETYPES from "./redux/storeTypes";
import {connect} from "react-redux";

class AddictionServices extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {

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
        this.props.providers.map((component, index) => {
            if(component.categories.includes(0)) {
                listings.push(
                    <Listing    key={component.id}
                                name={component.name}
                                description={component.description}
                                img={component.imgSource}
                    />
                )
            }
        });

        return (
            <Provider store = {store}>
                <Header/>
                <div className="bodyHolder">
                                <h1>Drug and Alcohol Treatment, Rehabilitation, Support, & Aftercare</h1>
                <div className="description">
                    <p>The Health and Wellness relevant service directory allows users to search, find, interact with and engage appropriate drug and alcohol support services. The directory aims to meet the needs of distressed people seeking relevant information, strategies, potential solutions and support.</p>
                    <p>The platform provides an opportunity for relevant and authoritative health and wellness organisations providing treatment and support to individuals and families impacted by addiction an opportunity to introduce themselves and their organisations</p>
                </div>
                    {listings}
                </div>
                <div className="paginationContainer">
                    <Pagination>{items}</Pagination>
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
  }
};
export default connect(mapStateToProps)(AddictionServices);
