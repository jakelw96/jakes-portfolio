import React from "react";
import resumeFile from "../../assets/files/Jacob Williams Resume 2022.pdf";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Resume() {
  return (
    <section className="project">
      <h1>My Skills</h1>
      <Container>
        <Row>
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
        </Row>
      </Container>
      <a href={resumeFile} className="resume-link" download>
        Download My Resume
      </a>
    </section>
  );
}

export default Resume;
