import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


function Navigation(props) {
    const {
        contactSelected,
        setContactSelected,
        aboutSelected,
        setAboutSelected,
        projectSelected,
        setProjectSelected,
        resumeSelected,
        setResumeSelected
    } = props
    

    return (
        <Navbar collapseOnSelect>
        <Container fluid>
        <Navbar.Brand><h1 className="title">Jacob Williams' Web Application Portfolio</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                {aboutSelected ? (
                    <>
                    <Nav.Link><h4 className="links navActive" onClick={() => {
                        setAboutSelected(true);
                        setProjectSelected(false);
                        setContactSelected(false);
                        setResumeSelected(false);
                    }}>About Me</h4></Nav.Link>
                    </>
                ) : (
                    <>
                    <Nav.Link><h4 className="links" onClick={() => {
                        setAboutSelected(true);
                        setProjectSelected(false);
                        setContactSelected(false);
                        setResumeSelected(false);
                    }}>About Me</h4></Nav.Link>
                    </>
                )}
                {projectSelected ? (
                    <>
                    <Nav.Link><h4 className="links navActive" onClick={() => {
                        setProjectSelected(true)
                        setAboutSelected(false)
                        setContactSelected(false)
                        setResumeSelected(false)
                    }}>Portfolio</h4></Nav.Link>
                    </>
                ) : ( 
                    <>
                    <Nav.Link><h4 className="links" onClick={() => {
                        setProjectSelected(true)
                        setAboutSelected(false)
                        setContactSelected(false)
                        setResumeSelected(false)
                    }}>Portfolio</h4></Nav.Link>
                    </>    
                )}
                {contactSelected ? (
                    <>
                    <Nav.Link><h4 className="links navActive" onClick={() => {
                        setProjectSelected(false)
                        setAboutSelected(false)
                        setContactSelected(true)
                        setResumeSelected(false)
                    }}>Contact</h4></Nav.Link>
                    </>
                ) : (
                    <>
                    <Nav.Link><h4 className="links" onClick={() => {
                        setProjectSelected(false)
                        setAboutSelected(false)
                        setContactSelected(true)
                        setResumeSelected(false)
                    }}>Contact</h4></Nav.Link>
                    </>    
                )}
                {resumeSelected ? (
                    <>
                    <Nav.Link><h4 className="links navActive" onClick={() => {
                        setProjectSelected(false)
                        setAboutSelected(false)
                        setContactSelected(false)
                        setResumeSelected(true)
                    }}>Resume</h4></Nav.Link>
                    </>
                ) : (
                    <>
                    <Nav.Link><h4 className="links" onClick={() => {
                        setProjectSelected(false)
                        setAboutSelected(false)
                        setContactSelected(false)
                        setResumeSelected(true)
                    }}>Resume</h4></Nav.Link>
                    </>    
                )}
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Navigation