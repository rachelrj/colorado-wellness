import React from 'react';
import {default as config} from './config';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';



class Header extends React.Component {
    state = {

    }

    componentDidMount() {

    }

    getData() {

    }

    render() {

        const classes = "header " + this.props.additionalClass;

        return (
            <React.Fragment>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="/">Health & Wellness Collective</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/blog/What-are-Triggers">Blog</Nav.Link>
                  <NavDropdown title="Professional Services" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/drug-alcohol-treatment-rehabilitation-support-aftercare">Addiction</NavDropdown.Item>
                    <NavDropdown.Item href="/under-construction">Fitness and Nutrition</NavDropdown.Item>
                    <NavDropdown.Item href="/under-construction">Holistic Practices</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
               </Navbar.Collapse>
            </Navbar>
            {
                this.props.additionalClass &&
                    <div className={classes}/>
            }
            </React.Fragment>
        );
    }
}

export default Header;