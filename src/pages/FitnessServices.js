import React from 'react';
import Listing from '../components/Listing';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Pagination, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from "../redux/store";
import getComponents from "../redux/reducer";
import STORETYPES from "../redux/storeTypes";
import {connect} from "react-redux";

class FitnessServices extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            subCategories: []
        };
    }

    handleChange(val) {
        this.setState({
            subCategories: val,
        });
    }

    render() {
        this.subCats = [];
        this.props.subCats.map((component, index) => {
            if(component.mainCat === 0) {
                this.subCats.push(
                <ToggleButton key={component.id} value={component.id} variant="outline-primary" size="lg">
                    {component.name}
                </ToggleButton>
                );
            }
        });

        this.listings = [];
        this.props.providers.map((component, index) => {
            if(component.categories.includes(0)) {
                if(!this.state.subCategories.length || 
                    this.state.subCategories.some(r=> component.subcategories.includes(r))){
                    const href = "/colorado-fitness/" + component.id;
                    this.listings.push(
                        <Listing    key={component.id}
                                    name={component.name}
                                    description={component.description}
                                    img={component.imgSource}
                                    href={href}
                        />
                    )                    
                }
            }
        });

        return (
            <Provider store = {store}>
                <Header additionalClass="fitnessHeader"/>
                <div className="bodyHolder">
                                <h1>Fitness Gyms & Memberships</h1>
                <div className="description">
                    <p>The Health and Wellness relevant service directory allows users to search, find, learn about, review, interact with and engage appropriate fitness services. The directory aims to match people with services that will benefit their fitness journey and to give open and honest feedback regarding our experiences.</p>
                </div>
                <ToggleButtonGroup type="checkbox" onChange={this.handleChange.bind(this)}>
                    {this.subCats}
                </ToggleButtonGroup>
                    {this.listings}
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
    subCats: components.SUBCATEGORIES,
  }
};
export default connect(mapStateToProps)(FitnessServices);
