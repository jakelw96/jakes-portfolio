import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ghIcon from "../../assets/icons/github-icon.png";
import linkedin from "../../assets/icons/li-logo.png";

function Navigation(props) {
  const {
    contactSelected,
    setContactSelected,
    aboutSelected,
    setAboutSelected,
    projectSelected,
    setProjectSelected,
    resumeSelected,
    setResumeSelected,
  } = props;
  console.log(aboutSelected);
  return (
    <Navbar collapseOnSelect>
      <Container fluid>
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="main-nav">
            {" "}
            {/* For normal sized screens */}
            {aboutSelected ? (
              <>
                <Nav.Link>
                  <h4
                    className="links-main navActive"
                    onClick={() => {
                      setAboutSelected(true);
                      setProjectSelected(false);
                      setContactSelected(false);
                      setResumeSelected(false);
                    }}
                  >
                    Home
                  </h4>
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link>
                  <h4
                    className="links-main"
                    onClick={() => {
                      setAboutSelected(true);
                      setProjectSelected(false);
                      setContactSelected(false);
                      setResumeSelected(false);
                    }}
                  >
                    Home
                  </h4>
                </Nav.Link>
              </>
            )}
            {projectSelected ? (
              <>
                <Nav.Link>
                  <h4
                    className="links-main navActive"
                    onClick={() => {
                      setProjectSelected(true);
                      setAboutSelected(false);
                      setContactSelected(false);
                      setResumeSelected(false);
                    }}
                  >
                    Projects
                  </h4>
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link>
                  <h4
                    className="links-main"
                    onClick={() => {
                      setProjectSelected(true);
                      setAboutSelected(false);
                      setContactSelected(false);
                      setResumeSelected(false);
                    }}
                  >
                    Projects
                  </h4>
                </Nav.Link>
              </>
            )}
            {resumeSelected ? (
              <>
                <Nav.Link>
                  <h4
                    className="links-main navActive"
                    onClick={() => {
                      setProjectSelected(false);
                      setAboutSelected(false);
                      setContactSelected(false);
                      setResumeSelected(true);
                    }}
                  >
                    Resume & Experience
                  </h4>
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link>
                  <h4
                    className="links-main"
                    onClick={() => {
                      setProjectSelected(false);
                      setAboutSelected(false);
                      setContactSelected(false);
                      setResumeSelected(true);
                    }}
                  >
                    Resume & Experience
                  </h4>
                </Nav.Link>
              </>
            )}
            {contactSelected ? (
              <>
                <Nav.Link>
                  <h4
                    className="links-main navActive"
                    onClick={() => {
                      setProjectSelected(false);
                      setAboutSelected(false);
                      setContactSelected(true);
                      setResumeSelected(false);
                    }}
                  >
                    Contact Me
                  </h4>
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link>
                  <h4
                    className="links-main"
                    onClick={() => {
                      setProjectSelected(false);
                      setAboutSelected(false);
                      setContactSelected(true);
                      setResumeSelected(false);
                    }}
                  >
                    Contact Me
                  </h4>
                </Nav.Link>
              </>
            )}
            <Nav.Link href="https://github.com/jakelw96" className="gh-box">
              <img className="gh-icon" src={ghIcon} alt="GitHub Profile" />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/jacob-williams-968115206/"
              className="li-box"
            >
              <img className="li-icon" src={linkedin} alt="LinkedIn Profile" />
            </Nav.Link>
          </Nav>

          <Nav>
            {" "}
            {/* Used for smaller/mobile screens */}
            <div className="drop-button">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              {[DropdownButton].map((DropdownType, idx) => (
                <DropdownType
                  as={ButtonGroup}
                  key={idx}
                  id={`dropdown-button-drop-${idx}`}
                  size="lg"
                  variant="dark"
                  title="Explore Jake's Portfolio"
                >
                  {aboutSelected ? (
                    <>
                      <Nav.Link>
                        <Dropdown.Item
                          eventKey="1"
                          className="active"
                          onClick={() => {
                            setAboutSelected(true);
                            setProjectSelected(false);
                            setContactSelected(false);
                            setResumeSelected(false);
                          }}
                        >
                          Home
                        </Dropdown.Item>
                      </Nav.Link>
                    </>
                  ) : (
                    <>
                      <Nav.Link>
                        <Dropdown.Item
                          eventKey="1"
                          className="links-main"
                          onClick={() => {
                            setAboutSelected(true);
                            setProjectSelected(false);
                            setContactSelected(false);
                            setResumeSelected(false);
                          }}
                        >
                          Home
                        </Dropdown.Item>
                      </Nav.Link>
                    </>
                  )}
                  {projectSelected ? (
                    <>
                      <Nav.Link>
                        <Dropdown.Item
                          eventKey="2"
                          className="active"
                          onClick={() => {
                            setProjectSelected(true);
                            setAboutSelected(false);
                            setContactSelected(false);
                            setResumeSelected(false);
                          }}
                        >
                          Projects
                        </Dropdown.Item>
                      </Nav.Link>
                    </>
                  ) : (
                    <>
                      <Nav.Link>
                        <Dropdown.Item
                          eventKey="2"
                          className="links-main"
                          id="not-active"
                          onClick={() => {
                            setProjectSelected(true);
                            setAboutSelected(false);
                            setContactSelected(false);
                            setResumeSelected(false);
                          }}
                        >
                          Projects
                        </Dropdown.Item>
                      </Nav.Link>
                    </>
                  )}

                  {resumeSelected ? (
                    <>
                      <Nav.Link>
                        <Dropdown.Item
                          eventKey="3"
                          className="active"
                          onClick={() => {
                            setProjectSelected(false);
                            setAboutSelected(false);
                            setContactSelected(false);
                            setResumeSelected(true);
                          }}
                        >
                          Resume & Experience
                        </Dropdown.Item>
                      </Nav.Link>
                    </>
                  ) : (
                    <>
                      <Nav.Link>
                        <Dropdown.Item
                          eventKey="3"
                          className="links-main"
                          onClick={() => {
                            setProjectSelected(false);
                            setAboutSelected(false);
                            setContactSelected(false);
                            setResumeSelected(true);
                          }}
                        >
                          Resume & Experience
                        </Dropdown.Item>
                      </Nav.Link>
                    </>
                  )}
                  {contactSelected ? (
                    <>
                      <Nav.Link>
                        <Dropdown.Item
                          eventKey="4"
                          className="active"
                          onClick={() => {
                            setProjectSelected(false);
                            setAboutSelected(false);
                            setContactSelected(true);
                            setResumeSelected(false);
                          }}
                        >
                          Contact Me
                        </Dropdown.Item>
                      </Nav.Link>
                    </>
                  ) : (
                    <>
                      <Nav.Link>
                        <Dropdown.Item
                          eventKey="4"
                          className="links-main"
                          onClick={() => {
                            setProjectSelected(false);
                            setAboutSelected(false);
                            setContactSelected(true);
                            setResumeSelected(false);
                          }}
                        >
                          Contact Me
                        </Dropdown.Item>
                      </Nav.Link>
                    </>
                  )}
                  <Dropdown.Divider />

                  <Dropdown.Item
                    href="https://github.com/jakelw96"
                    eventKey="5"
                  >
                    <img
                      className="gh-icon-dropdown"
                      src={ghIcon}
                      alt="GitHub Profile"
                    />
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item
                    href="https://www.linkedin.com/in/jacob-williams-968115206/"
                    eventKey="6"
                  >
                    <img
                      className="li-icon-dropdown"
                      src={linkedin}
                      alt="LinkedIn Profile"
                    />
                  </Dropdown.Item>
                </DropdownType>
              ))}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
