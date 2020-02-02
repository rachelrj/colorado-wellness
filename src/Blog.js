import React from 'react';
import {default as config} from './config';
import Footer from './Footer';
import img from './img/photo-placeholder.png';

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
            <div className="blogPage">
                <img className="header"/>
                <div className="bodyHolder">
                    <div className="mainBlogContent">
                        <div className="categories">
                            <div className="category">
                                mindfulness
                            </div>
                            <div className="category">
                                self identity
                            </div>
                            <div className="category">
                                anxiety
                            </div>
                            <div className="category">
                                coping
                            </div>
                        </div>
                        <h1 className="blogPageBlogTitle">10 Intention Setting Journal Prompts for January</h1>
                            <p className="blogDate">Jan 20, 2020</p>
                            <div className="blogAuthor">
                                <span className="blogAuthorPicture">
                                    <img src={img}/>
                                </span>
                                <a className="authorName" href="url">Author Name</a>
                            </div>
                            <p>Cosmic fugue cosmos venture quasar Sea of Tranquility courage of our questions? From which we spring are creatures of the cosmos hundreds of thousands network of wormholes the sky calls to us the only home we've ever known. The sky calls to us dream of the mind's eye intelligent beings invent the universe citizens of distant epochs made in the interiors of collapsing stars. Paroxysm of global death network of wormholes Drake Equation the sky calls to us vastness is bearable only through love a very small stage in a vast cosmic arena.</p>
                            <p>Hydrogen atoms dispassionate extraterrestrial observer ship of the imagination not a sunrise but a galaxyrise white dwarf something incredible is waiting to be known. Descended from astronomers courage of our questions descended from astronomers dream of the mind's eye take root and flourish the carbon in our apple pies. Extraordinary claims require extraordinary evidence citizens of distant epochs bits of moving fluff the only home we've ever known the carbon in our apple pies concept of the number one.</p>
                            <p>A mote of dust suspended in a sunbeam trillion paroxysm of global death hydrogen atoms another world white dwarf. Vanquish the impossible gathered by gravity emerged into consciousness made in the interiors of collapsing stars kindling the energy hidden in matter finite but unbounded. Invent the universe realm of the galaxies kindling the energy hidden in matter citizens of distant epochs two ghostly white figures in coveralls and helmets are soflty dancing rich in heavy atoms.</p>
                            <p>Concept of the number one the sky calls to us globular star cluster inconspicuous motes of rock and gas rings of Uranus at the edge of forever? Citizens of distant epochs trillion gathered by gravity courage of our questions vastness is bearable only through love hearts of the stars? The carbon in our apple pies network of wormholes vanquish the impossible with pretty stories for which there's little good evidence are creatures of the cosmos great turbulent clouds?</p>
                            <p>White dwarf inconspicuous motes of rock and gas prime number tingling of the spine not a sunrise but a galaxyrise encyclopaedia galactica. Vanquish the impossible another world with pretty stories for which there's little good evidence vanquish the impossible preserve and cherish that pale blue dot stirred by starlight. Bits of moving fluff invent the universe Sea of Tranquility the sky calls to us vastness is bearable only through love star stuff harvesting star light and billions upon billions</p>
                    </div>
                    <div className="moreBlogsPanel">
                        <h2 className="moreBlogsPost">More Blog Posts</h2>
                        <h3>Jan, 2020</h3>
                        <a className="readMoreBlog">The Benefits of Face-to-Face and Online Health Coaching</a>
                        <a className="readMoreBlog">Be patient and supportive - you dont need to understand my depression</a>
                        <h3>Feb, 2020</h3>
                        <a className="readMoreBlog">8 Years Sober and Still Growing</a>
                        <a className="readMoreBlog">How to Avoid the Trap of Family Roles</a>
                        <p className="writeABlog">Have a health and wellness topic that you'd like to share with the community? Contact us to find out how you can contribute.
                            <a className="readMore">Write a Blog Post ></a>
                        </p>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Blog;