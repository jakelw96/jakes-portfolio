import React from "react";
import resumeFile from "../../assets/files/Jacob Williams Resume.pdf";
import badgeImg from "../../assets/images/uofu-badge.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Resume() {
  return (
    <section className="project">
      <Container>
        <Row className="resume-header-container-main">
          <Col sm={12}>
            <h1 className="title">Experience</h1>
            <p className="sub-text">
              This page outlines the different programming languages I have
              experience with, their associated libraries, and other
              miscellaneous skills. The badge below is proof of my certification
              with the University of Utah. Please click on it to verify my
              credentials. My resume is also available for download!
            </p>
          </Col>
          <Col sm={6}>
            <a href="https://www.credly.com/badges/079e1b1c-9e8f-4302-82bf-0918392bfca1">
              <img src={badgeImg} alt="uofu badge" className="uofu-badge"></img>
            </a>
          </Col>
          <Col>
            <a href={resumeFile} className="resume-link sec-title" download>
              Download Resume
            </a>
          </Col>
        </Row>

        {/* Header section for smaller screens */}
        <Row className="resume-header-container-sub">
          <Col>
            <h1 className="title">Experience</h1>
            <p className="sub-text">
              This page outlines the different programming languages I have
              experience with, their associated libraries, and other
              miscellaneous skills. The badge below is proof of my certification
              with the University of Utah. Please click on it to verify my
              credentials. My resume is also available for download!
            </p>
          </Col>
          <Col>
            <a href="https://www.credly.com/badges/079e1b1c-9e8f-4302-82bf-0918392bfca1">
              <img src={badgeImg} alt="uofu badge" className="uofu-badge"></img>
            </a>
          </Col>
          <Col>
            <a href={resumeFile} className="resume-link sec-title" download>
              Download Resume
            </a>
          </Col>
        </Row>
        {/* Header section for smaller screens end*/}
        <Row>
          <Col sm={3}>
            <h2 className="sec-title">Languages</h2>
            <ul>
              <li className="sub-text">Javascript</li>
              <li className="sub-text">jQuery</li>
              <li className="sub-text">HTML</li>
              <li className="sub-text">CSS</li>
              <li className="sub-text">Java</li>
            </ul>
          </Col>
          <Col sm={3}>
            <h2 className="sec-title">Front-End</h2>
            <ul>
              <li className="sub-text">React</li>
              <li className="sub-text">React-Redux</li>
              <li className="sub-text">Handlebars</li>
              <li className="sub-text">Bootstrap</li>
              <li className="sub-text">Materialize</li>
            </ul>
          </Col>
          <Col sm={3}>
            <h2 className="sec-title">Back-End</h2>
            <ul>
              <li className="sub-text">Node.js</li>
              <li className="sub-text">GraphQL</li>
              <li className="sub-text">Sequelize</li>
              <li className="sub-text">Mongoose</li>
              <li className="sub-text">Express.js</li>
              <li className="sub-text">Webpack Module Bundler</li>
            </ul>
          </Col>
          <Col sm={3}>
            <h2 className="sec-title ">Databases</h2>
            <ul>
              <li className="sub-text">MySQL</li>
              <li className="sub-text">MongoDB</li>
              <li className="sub-text">PostgreSQL</li>
            </ul>
          </Col>
          <Col sm={3}>
            <h2 className="sec-title ">Misc Developer Skills</h2>
            <ul>
              <li className="sub-text">Git Version Control</li>
              <li className="sub-text">PWA</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Resume;
