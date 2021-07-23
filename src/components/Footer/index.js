import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <footer>
            <Container>
                <Row className="foot">
                    <Col>Hello</Col>
                    <Col>Hello</Col>
                    <Col>Hello</Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;