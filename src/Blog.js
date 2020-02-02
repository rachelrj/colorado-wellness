import React from 'react';
import {default as config} from './config';

class Blog extends React.Component {
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
            <div className="blogyMcBlog">
            </div>
        );
    }
}

export default Blog;