import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <Container className="contact-page-container">
      <Row className="contact-header-container-main">
        <Col sm={{ span: 12 }}>
          <h1 className="title">Contact</h1>
          <p className="sub-text">
            Thanks so much again for visiting my page! My email and phone number
            are listed below. You can also reach me on LinkedIn(link is in
            navigation bar). A reminder: I am currently looking for software
            and/or web developer opportunities!
          </p>
          <h1 className="sec-title">Phone Number: 801-452-5681</h1>
          <h1 className="sec-title">
            Email: <a href="mailto:jake.lw96@gmail.com">jake.lw96@gmail.com</a>
          </h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
