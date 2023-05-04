import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import avatar from "../../assets/images/picture.jpg";

function About() {
  return (
    <Container fluid className="home-container">
      <Row>
        <Col md={4}>
          <h1 className="title">Jacob Williams Web Portfolio</h1>
          <p className="bio-text">
            {/* My name is Jacob Williams and I am a web developer. I have
            experience working on the front-end with
            HTML, CSS, Javascript, jQuery, and libraries such as React (this
            portfolio is built with it! Love React!), Bootstrap, and
            Materialize.
            I also have experience with the back-end with Node.js,
            GraphQL, Sequelize, Express, Webpack, and databases such as MongoDB
            and MySql. */}
            lorem ipsum
          </p>
          <button>Hello</button>
        </Col>
        <Col md={{ span: 6, offset: 2 }}>
          <img src={avatar} className="avatar" alt="cover" />
        </Col>
      </Row>
    </Container>

    //     <section className="bio">
    //    <h1>Jacob Williams Web Portfolio</h1>
    //    <img src={avatar} className="avatar" alt="cover" />
    //    <p className="bio-text">
    //      My name is Jacob Williams and I am a web developer. I have experience working on the front-end with<br />
    //      HTML, CSS, Javascript, jQuery, and libraries such as React (this portfolio is built with it! Love React!), Bootstrap, and Materialize.<br />
    //      I also have experience with the back-end with Node.js, GraphQL, Sequelize, Express, Webpack, and databases such as MongoDB and MySql.
    //    </p>
    //  </section>
  );
}

export default About;
