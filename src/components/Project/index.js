import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dinnerPartyImg from '../../assets/images/dinner-party-img.png';
import bestSellersImg from '../../assets/images/thebestsellers-img.png';
import techBlogImg from '../../assets/images/tech-blog-img.png';
import photoPortImg from '../../assets/images/photo-port-img.png';
import pizzaHuntImg from '../../assets/images/pizza-hunt-img.png';
import noteTakerImg from '../../assets/images/note-taker-img.png';

function Project() {
    return (
        <section className="project">
            <h1>Projects</h1>
            <Container>
                <Row>
                    <Col sm={3} className="project-header">
                        <h2 className="project-title">Dinner Party</h2>
                        <img src={dinnerPartyImg} className="project-img" alt="dinner party"></img>
                        <a href="https://dinner-parties.herokuapp.com/"><h4>Link to Application</h4></a>

                    </Col>
                    <Col sm={{ span: 3, offset: 1}}>
                        <h2 className="project-title">TheBestSellers</h2>
                        <img src={bestSellersImg} className="project-img" alt="the best sellers"></img>
                        <a href="https://jakelw96.github.io/the-best-sellers/"><h4>Link to Application</h4></a>
                    </Col>
                    <Col sm={{ span: 3, offset: 1}}>
                        <h2 className="project-title">Tech Blog</h2>
                        <img src={techBlogImg} className="project-img" alt="tech blog"></img>
                        <a href="https://tech-blog-jlw.herokuapp.com/"><h4>Link to Application</h4></a>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <h2 className="project-title">Photo Port</h2>
                        <img src={photoPortImg} className="project-img" alt="portfolio-phot"></img>
                        <a href="https://jakelw96.github.io/photo-port/"><h4>Link to Application</h4></a>
                    </Col>
                    <Col sm={{ span: 3, offset: 1}}>
                        <h2 className="project-title">Pizza Hunt</h2>
                        <img src={pizzaHuntImg} className="project-img" alt="pizza hunt"></img>
                        <a href="https://pizza-hunt-jlw.herokuapp.com/"><h4>Link to Application</h4></a>
                    </Col>
                    <Col sm={{ span: 3, offset: 1}}>
                        <h2 className="project-title">Note Taker</h2>
                        <img src={noteTakerImg} className="project-img" alt="note taker"></img>
                        <a href="https://note-taker-jakelw96.herokuapp.com/"><h4>Link to Application</h4></a>
                    </Col>
                </Row>
            </Container>
        </section>
        
        

    );
}

export default Project;