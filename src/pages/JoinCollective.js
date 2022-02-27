import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Form, Button, ToggleButtonGroup } from 'react-bootstrap';

class JoinCollective extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            submitted: false
        };
    }

    componentDidMount() {
    }

    getBlogPosts() {
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        this.setState({
            submitted: true
        })
        fetch('/email', {
            method: 'post',
            body: JSON.stringify('')
        }).then(function(response) {
            return response.json();
        });
    };

    render() {

        return (
            <div>
                <Header additionalClass="joinCollective"/>             
                <h1>Colorado Health & Wellness Collective</h1>
                <div className="bodyHolder">
                <p>Let's put a pin in that. Flesh that out but what's the real problem we're trying to solve here?. The last person we talked to said this would be ready cannibalize. Usabiltiy. Sacred cow. Throughput this is our north star design and window-licker, so circle back around. Timeframe one-sheet. Imagineer turn the ship nor get six alpha pups in here for a focus group, yet nail it down and guerrilla marketing. Performance review circle back around this is a no-brainer we need to socialize the comms with the wider stakeholder community for come up with something buzzworthy, but you gotta smoke test your hypothesis.</p>
                
                    {
                        !this.state.submitted &&
                            <Form onSubmit={this.handleSubmit.bind(this)}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control size="lg" type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicText">
                                <Form.Label>Message</Form.Label>
                                <Form.Control size="lg"  type="textarea" placeholder="I have no idea. Maybe this is for people that want to help or write a guest blog?" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            </Form>
                    }
                    {
                        this.state.submitted &&
                        <h2>Thank you! We will get back to you within a few business days.</h2>
                    }
                </div>
                <Footer/>
            </div>
        );
    }
}

export default JoinCollective;
