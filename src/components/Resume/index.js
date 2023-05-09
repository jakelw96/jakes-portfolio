import React from "react";
import resumeFile from "../../assets/files/Jacob Williams Resume.pdf";
import badgeImg from "../../assets/images/uofu-badge.png";
import jsImg from "../../assets/images/js-logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Resume() {
  return (
    <section className="project">
      <Container>
        <Row className="project-header-container-main">
          <Col sm={11}>
            <h1 className="title">Experience</h1>
            <p className="sub-text">
              This page outlines the different programming languages I have
              experience with, their associated libraries, and other
              miscellaneous skills. The badge to the right is proof of my
              certification with the University of Utah. Please click on it to
              verify my credentials. My resume is also available for download!
            </p>
          </Col>
          <Col sm={1}>
            <a href="https://www.credly.com/badges/079e1b1c-9e8f-4302-82bf-0918392bfca1">
              <img src={badgeImg} alt="uofu badge"></img>
            </a>
          </Col>
          <Col>
            <a href={resumeFile} className="resume-link sec-title" download>
              Download Resume
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={jsImg} alt="javascript" className="js-img"></img>
          </Col>
          <Col>
          
          </Col>
        </Row>
        {/* <Row>
          <Col sm={3}>
            <h2 className="list-title">Languages</h2>
            <ul>
              <li className="list-items">Javascript</li>
              <li className="list-items">HTML</li>
              <li className="list-items">CSS</li>
            </ul>
          </Col>
          <Col sm={3}>
            <h2 className="list-title">Front-End</h2>
            <ul>
              <li className="list-items">React</li>
              <li className="list-items">Redux</li>
              <li className="list-items">Bootstrap</li>
              <li className="list-items">Materialize</li>
              <li className="list-items">jQuery</li>
              <li className="list-items">PWA</li>
            </ul>
          </Col>
          <Col sm={3}>
            <h2 className="list-title">Back-End</h2>
            <ul>
              <li className="list-items">Node.js</li>
              <li className="list-items">GraphQL</li>
              <li className="list-items">Sequelize</li>
              <li className="list-items">Express.js</li>
              <li className="list-items">Handlebars</li>
              <li className="list-items">Webpack Module Bundler</li>
            </ul>
          </Col>
          <Col sm={3}>
            <h2 className="list-title">Databases</h2>
            <ul>
              <li className="list-items">MySQL</li>
              <li className="list-items">MongoDB</li>
              <li className="list-items">PostgreSQL</li>
            </ul>
          </Col>
        </Row> */}
      </Container>
    </section>
  );
}

export default Resume;
