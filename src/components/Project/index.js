import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dinnerPartyImg from "../../assets/images/dinner-party-img.png";
import bestSellersImg from "../../assets/images/thebestsellers-img.png";
import techBlogImg from "../../assets/images/tech-blog-img.png";
import photoPortImg from "../../assets/images/photo-port-img.png";
import pizzaHuntImg from "../../assets/images/pizza-hunt-img.png";
import entertainMeImg from "../../assets/images/entertain-me-img.png";

function Project() {
  return (
    <section className="project">
      <Container>
        <Row>
          <Col sm={{ span: 12 }}>
            <h1>Projects</h1>
            <p className="project-header-text">
              These are some of the projects I have made. Please check out my
              GitHub page to see more of my work! (link in "Contact Me" section
              below)
            </p>
          </Col>
          <Col sm={{ span: 3, offset: 1 }}>
            <h2 className="project-title">EntertainMe 2.0</h2>
            <img
              src={entertainMeImg}
              className="project-img"
              alt="entertain me"
            ></img>
            <a href="https://entertain-me-redux.herokuapp.com/">
              <h4>Link to Application</h4>
            </a>
            <a href="https://github.com/jakelw96/entertain-me-redux">
              <h4>GitHub Repository</h4>
            </a>
          </Col>
          <Col sm={3} className="project-header">
            <h2 className="project-title">Dinner Party</h2>
            <img
              src={dinnerPartyImg}
              className="project-img"
              alt="dinner party"
            ></img>
            <a href="https://dinner-parties.herokuapp.com/">
              <h4>Link to Application</h4>
            </a>
            <a href="https://github.com/jakelw96/dinner-party">
              <h4>GitHub Repository</h4>
            </a>
          </Col>
          <Col sm={{ span: 3 }}>
            <h2 className="project-title">TheBestSellers</h2>
            <img
              src={bestSellersImg}
              className="project-img"
              alt="the best sellers"
            ></img>
            <a href="https://jakelw96.github.io/the-best-sellers/">
              <h4>Link to Application</h4>
            </a>
            <a href="https://github.com/jakelw96/the-best-sellers">
              <h4>GitHub Repository</h4>
            </a>
          </Col>
          <Col sm={{ span: 3, offset: 1 }}>
            <h2 className="project-title">Tech Blog</h2>
            <img
              src={techBlogImg}
              className="project-img"
              alt="tech blog"
            ></img>
            <a href="https://tech-blog-jlw.herokuapp.com/">
              <h4>Link to Application</h4>
            </a>
            <a href="https://github.com/jakelw96/tech-blog">
              <h4>GitHub Repository</h4>
            </a>
          </Col>
          <Col sm={{ span: 3 }}>
            <h2 className="project-title">Pizza Hunt</h2>
            <img
              src={pizzaHuntImg}
              className="project-img"
              alt="pizza hunt"
            ></img>
            <a href="https://pizza-hunt-jlw.herokuapp.com/">
              <h4>Link to Application</h4>
            </a>
            <a href="https://github.com/jakelw96/pizza-hunt">
              <h4>GitHub Repository</h4>
            </a>
          </Col>
          <Col sm={{ span: 3 }}>
            <h2 className="project-title">Photo Port</h2>
            <img
              src={photoPortImg}
              className="project-img"
              alt="portfolio-phot"
            ></img>
            <a href="https://jakelw96.github.io/photo-port/">
              <h4>Link to Application</h4>
            </a>
            <a href="https://github.com/jakelw96/photo-port">
              <h4>GitHub Repository</h4>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Project;
