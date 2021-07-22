import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Navigation() {

    return (
        <Navbar collapseOnSelect>
        <Container fluid>
        <Navbar.Brand className="title"><h1 className="links">Jacob Williams' Web Application Portfolio</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
                <Nav.Link><h4 className="links">About Me</h4></Nav.Link>
                <Nav.Link><h4 className="links">Portfolio</h4></Nav.Link>
                <Nav.Link><h4 className="links">Contact</h4></Nav.Link>
                <Nav.Link><h4 className="links">Resume</h4></Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>  
    )
}

export default Navigation