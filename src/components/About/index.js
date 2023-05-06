import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import avatar from "../../assets/images/picture.jpeg";

function About(props) {
  const { setAboutSelected, setProjectSelected } = props;

  return (
    <Container fluid className="home-container">
      <Row className="home-row mobile-row">
        <Col md={5} className="regular-col">
          <h1 className="title">Jacob Williams Web Portfolio</h1>
          <p className="bio-text">
            Welcome to my portfolio! A little about me: I am a full-stack
            developer. When I am not coding, I am spending time with my family,
            going on adventerous drives, or relaxing at home playing a nice
            video game. The Legend of Zelda series is my favorite! Please take
            some time to review my projects and experience. I am currently
            searching for a web, front-end, back-end, full-stack, or overall
            software developer role! Thank you for stopping by and click the
            button below to head to my projects page!
          </p>

          <button
            className="homePageBtn"
            onClick={() => {
              setAboutSelected(false);
              setProjectSelected(true);
            }}
          >
            <h2 className="homePageBtnText">Let's get started</h2>
          </button>
        </Col>
        <Col md={{ span: 6, offset: 1 }} className="regular-col">
          <img src={avatar} className="avatar" alt="cover" />
        </Col>
        {/* For smaller screens */}
      
        <Col md={5} className="mobile-col">
          <h1 className="title">Jacob Williams Web Portfolio</h1>
          <p className="bio-text">
            Welcome to my portfolio! A little about me: I am a full-stack
            developer. When I am not coding, I am spending time with my family,
            going on adventerous drives, or relaxing at home playing a nice
            video game. The Legend of Zelda series is my favorite! Please take
            some time to review my projects and experience. I am currently
            searching for a web, front-end, back-end, full-stack, or overall
            software developer role! Thank you for stopping by and click the
            button below to head to my projects page!
          </p>

          <button
            className="homePageBtn"
            onClick={() => {
              setAboutSelected(false);
              setProjectSelected(true);
            }}
          >
            <h2 className="homePageBtnText">Let's get started</h2>
          </button>
        </Col>
        <Col  md={{ span: 6, offset: 1 }} className="mobile-col">
          <img src={avatar} className="avatar" alt="cover" />
        </Col>
      </Row>

      
      
    </Container>
  );
}

export default About;
