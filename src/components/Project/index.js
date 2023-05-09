import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dinnerPartyImg from "../../assets/images/dinner-party-img.png";
import bestSellersImg from "../../assets/images/thebestsellers-img.png";
import photoPortImg from "../../assets/images/photo-port-img.png";
import pizzaHuntImg from "../../assets/images/pizza-hunt-img.png";
import entertainMeImg from "../../assets/images/entertain-me-img.png";

function Project() {
  return (
    <Container>
      <Row className="project-header-container-main">
        <Col sm={{ span: 12 }}>
          <h1 className="title">Projects</h1>
          <p className="sub-text">
            These are some of the projects I have made. Please check out my
            GitHub page to see more of my work!
          </p>
        </Col>
      </Row>
      <Row className="project-container">
        <Col className="regular-col">
          <h2 className="sec-title">EntertainMe 2.0</h2>
          <p className="sec-sub-text">
            A single-page-application that presents info on a specific movie,
            show, or video game based on certain criteria a user enters.
            Behaving like a multi-page app, users can efficiently sort through
            media, save what they are interested in, and share their playlists
            with friends and fellow users.
          </p>
          <Row>
            <Col>
              <a href="https://entertain-me-redux.herokuapp.com/">
                <button className="projectPageBtn">
                  <h2 className="projectPageBtnText">Live Application</h2>
                </button>
              </a>
            </Col>
            <Col>
              <a href="https://github.com/jakelw96/entertain-me-redux">
                <button className="projectPageBtn">
                  <h2 className="projectPageBtnText">GitHub Repository</h2>
                </button>
              </a>
            </Col>
          </Row>
        </Col>
        <Col>
          <img
            src={entertainMeImg}
            className="project-img"
            alt="entertain me"
          ></img>
        </Col>
      </Row>
      <Row className="project-container">
        <Col md={6}>
          <img
            src={dinnerPartyImg}
            className="project-img"
            alt="dinner party"
          ></img>
        </Col>
        <Col md={{ span: 5, offset: 1 }} className="regular-col">
          <h1 className="sec-title">Dinner Party</h1>
          <p className="sec-sub-text">
            Dinner Party is a place to talk about the things you like and find
            more things to love.
          </p>
          <Row>
            <Col>
              <a href="https://dinner-parties.herokuapp.com/">
                <button className="projectPageBtn">
                  <h2 className="projectPageBtnText">Live Application</h2>
                </button>
              </a>
            </Col>
            <Col>
              <a href="https://github.com/jakelw96/dinner-party">
                <button className="projectPageBtn">
                  <h2 className="projectPageBtnText">GitHub Repository</h2>
                </button>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="project-container">
        <Col className="regular-col">
          <h1 className="sec-title">TheBestSellers</h1>
          <p className="sec-sub-text">
            A static HTML page that has the user select one of several current
            bestsellers lists from the New York Times bestsellers lists and
            displays the top 6 books in those categories. There is an Amazon
            link the user can click on to purchase the book, and a save
            button(using LocalStorage) if the user would like to save the Amazon
            link while they check different lists.
          </p>
          <Row>
            <Col>
              <a href="https://jakelw96.github.io/the-best-sellers/">
                <button className="projectPageBtn">
                  <h2 className="projectPageBtnText">Live Application</h2>
                </button>
              </a>
            </Col>
            <Col>
              <a href="https://github.com/jakelw96/the-best-sellers">
                <button className="projectPageBtn">
                  <h2 className="projectPageBtnText">GitHub Repository</h2>
                </button>
              </a>
            </Col>
          </Row>
        </Col>
        <Col>
          <img
            src={bestSellersImg}
            className="project-img"
            alt="the best sellers"
          ></img>
        </Col>
      </Row>
      <Row className="project-container">
        <Col md={6}>
          <img
            src={pizzaHuntImg}
            className="project-img"
            alt="pizza hunt"
          ></img>
        </Col>
        <Col md={{ span: 5, offset: 1 }} className="regular-col">
          <h1 className="sec-title">Pizza Hunt</h1>
          <p className="sec-sub-text">
            Pizza Hunt is an application for users to create their own custom
            pizza creations. Other users may also comment on those creations.
          </p>
          <Row>
            <Col>
              <a href="https://pizza-hunt-jlw.herokuapp.com/">
                <button className="projectPageBtn">
                  <h2 className="projectPageBtnText">Live Application</h2>
                </button>
              </a>
            </Col>
            <Col>
              <a href="https://github.com/jakelw96/pizza-hunt">
                <button className="projectPageBtn">
                  <h2 className="projectPageBtnText">GitHub Repository</h2>
                </button>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="project-container">
        <Col className="regular-col">
          <h1 className="sec-title">Photo Port</h1>
          <p className="sec-sub-text">
            Photo Port is a practice application for React. It is a portfolio
            for a collection of photos a user may use to showcase their work.
          </p>
          <Row>
            <Col>
              <a href="https://jakelw96.github.io/photo-port/">
                <button className="projectPageBtn">
                  <h2 className="projectPageBtnText">Live Application</h2>
                </button>
              </a>
            </Col>
            <Col>
              <a href="https://github.com/jakelw96/photo-port">
                <button className="projectPageBtn">
                  <h2 className="projectPageBtnText">GitHub Repository</h2>
                </button>
              </a>
            </Col>
          </Row>
        </Col>
        <Col>
          <img
            src={photoPortImg}
            className="project-img"
            alt="portfolio-phot"
          ></img>
        </Col>
      </Row>

      {/* For smaller screens */}
      <Row className="project-header-container-sub">
        <Col sm={{ span: 12 }}>
          <h1 className="title">Projects</h1>
          <p className="sub-text">
            These are some of the projects I have made. Please check out my
            GitHub page to see more of my work!
          </p>
        </Col>
      </Row>
      <Row className="project-container-sub">
        <Col sm={{ span: 12 }} className="mobile-col">
          <h1 className="sec-title">EntertainMe 2.0</h1>
          <p className="sec-sub-text">
            A single-page-application that presents info on a specific movie,
            show, or video game based on certain criteria a user enters.
            Behaving like a multi-page app, users can efficiently sort through
            media, save what they are interested in, and share their playlists
            with friends and fellow users.
          </p>
          <Row className="mobile-btn-row">
            <Col>
              <a href="https://entertain-me-redux.herokuapp.com/">
                <button className="projectPageBtn">
                  <h2 className="projectPageBtnText">Live Application</h2>
                </button>
              </a>
            </Col>
            <Col>
              <a href="https://github.com/jakelw96/entertain-me-redux">
                <button className="projectPageBtn">
                  <h2 className="projectPageBtnText">GitHub Repository</h2>
                </button>
              </a>
            </Col>
            <img
              src={entertainMeImg}
              className="project-img"
              alt="entertain me"
            ></img>
          </Row>
        </Col>
      </Row>
      <Row className="project-container-sub">
        <Col sm={{ span: 12 }} className="mobile-col">
          <h1 className="sec-title">Dinner Party</h1>
          <p className="sec-sub-text">
            Dinner Party is a place to talk about the things you like and find
            more things to love.
          </p>
          <Row className="mobile-btn-row">
            <Col>
              <a href="https://dinner-parties.herokuapp.com/">
                <button className="projectPageBtn">
                  <h2 className="projectPageBtnText">Live Application</h2>
                </button>
              </a>
            </Col>
            <Col>
              <a href="https://github.com/jakelw96/dinner-party">
                <button className="projectPageBtn">
                  <h2 className="projectPageBtnText">GitHub Repository</h2>
                </button>
              </a>
            </Col>
            <img
              src={dinnerPartyImg}
              className="project-img"
              alt="dinner party"
            ></img>
          </Row>
        </Col>
      </Row>
      <Row className="project-container-sub">
        <Col sm={{ span: 12 }} className="mobile-col">
          <h1 className="sec-title">TheBestSellers</h1>
          <p className="sec-sub-text">
            A static HTML page that has the user select one of several current
            bestsellers lists from the New York Times bestsellers lists and
            displays the top 6 books in those categories. There is an Amazon
            link the user can click on to purchase the book, and a save
            button(using LocalStorage) if the user would like to save the Amazon
            link while they check different lists.
          </p>
          <Row className="mobile-btn-row">
            <Col>
              <a href="https://jakelw96.github.io/the-best-sellers/">
                <button className="projectPageBtn">
                  <h2 className="projectPageBtnText">Live Application</h2>
                </button>
              </a>
            </Col>
            <Col>
              <a href="https://github.com/jakelw96/the-best-sellers">
                <button className="projectPageBtn">
                  <h2 className="projectPageBtnText">GitHub Repository</h2>
                </button>
              </a>
            </Col>
            <img
              src={bestSellersImg}
              className="project-img"
              alt="the best sellers"
            ></img>
          </Row>
        </Col>
      </Row>
      <Row className="project-container-sub">
        <Col sm={{ span: 12 }} className="mobile-col">
          <h1 className="sec-title">Pizza Hunt</h1>
          <p className="sec-sub-text">
            Pizza Hunt is an application for users to create their own custom
            pizza creations. Other users may also comment on those creations.
          </p>
          <Row className="mobile-btn-row">
            <Col>
              <a href="https://pizza-hunt-jlw.herokuapp.com/">
                <button className="projectPageBtn">
                  <h2 className="projectPageBtnText">Live Application</h2>
                </button>
              </a>
            </Col>
            <Col>
              <a href="https://github.com/jakelw96/pizza-hunt">
                <button className="projectPageBtn">
                  <h2 className="projectPageBtnText">GitHub Repository</h2>
                </button>
              </a>
            </Col>
            <img
              src={pizzaHuntImg}
              className="project-img"
              alt="pizza hunt"
            ></img>
          </Row>
        </Col>
      </Row>
      <Row className="project-container-sub">
        <Col sm={{ span: 12 }} className="mobile-col">
          <h1 className="sec-title">Photo Port</h1>
          <p className="sec-sub-text">
            Photo Port is a practice application for React. It is a portfolio
            for a collection of photos a user may use to showcase their work.
          </p>
          <Row className="mobile-btn-row">
            <Col>
              <a href="https://jakelw96.github.io/photo-port/">
                <button className="projectPageBtn">
                  <h2 className="projectPageBtnText">Live Application</h2>
                </button>
              </a>
            </Col>
            <Col>
              <a href="https://github.com/jakelw96/photo-port">
                <button className="projectPageBtn">
                  <h2 className="projectPageBtnText">GitHub Repository</h2>
                </button>
              </a>
            </Col>
            <img
              src={photoPortImg}
              className="project-img"
              alt="portfolio-phot"
            ></img>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Project;
