import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';



class Header extends React.Component {
    render() {

        const classes = "header " + this.props.additionalClass;

        return (
            <React.Fragment>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="/">Awaken Your Well</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/blog/Red-Light-for-your-Skin">Blog</Nav.Link>
                  <NavDropdown title="Health and Wellness" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/colorado-fitness">Fitness</NavDropdown.Item>
                    <NavDropdown.Item href="/under-construction">Therapy</NavDropdown.Item>
                    <NavDropdown.Item href="/under-construction">Nutrition</NavDropdown.Item>
                    <NavDropdown.Item href="/under-construction">Apparel</NavDropdown.Item>
                    <NavDropdown.Item href="/under-construction">Holistic</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/join-collective">Join the Collective</Nav.Link>
                </Nav>
                <Form className="d-flex nav-form">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
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