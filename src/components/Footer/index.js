import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fb from '../../assets/icons/facebook-icon.png';
import linkedin from '../../assets/icons/li-logo.png';
import ghIcon from '../../assets/icons/github-icon.png';

function Footer() {
    return (
        <footer>
            <Container>
                <h1 className="footer-header">Contact Me</h1>
                <Row className="foot">
                    <Col>
                        <p className="contact-info">
                        Email: <a href="mailto:jake.lw96@gmail.com">jake.lw96@gmail.com</a><br />
                        Phone: 801-452-5681
                        </p>
                    </Col>
                    <Col>
                        <h2>Pages</h2>
                        <a href="https://github.com/jakelw96">
                            <img className="gh-icon" src={ghIcon} alt="GitHub Profile" />
                        </a> <br />
                        <a href="https://www.linkedin.com/in/jacob-williams-968115206/">
                            <img className="li-icon" src={linkedin} alt="LinkedIn Profile" />
                        </a> <br />
                        <a href="https://www.facebook.com/jake.williams.75248/">
                            <img className="fb-icon" src={fb}   alt="Facebook Profile" />
                        </a> 
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;