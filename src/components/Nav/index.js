import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavDropdown } from "react-bootstrap";
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

  return (
    <Navbar collapseOnSelect>
      <Container fluid>
        <Navbar.Brand>
          {/* <h1 className="title">Jacob Williams' Web Application Portfolio</h1> */}
        </Navbar.Brand>
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
                    Contact Me!
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
                    Contact Me!
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
            <Nav.Link>
              <span className="icons">
                <a href="https://github.com/jakelw96">
                  <img className="gh-icon" src={ghIcon} alt="GitHub Profile" />
                </a>
                <a href="https://www.linkedin.com/in/jacob-williams-968115206/">
                  <img
                    className="li-icon"
                    src={linkedin}
                    alt="LinkedIn Profile"
                  />
                </a>
              </span>
            </Nav.Link>
          </Nav>

          <Nav>
            {" "}
            {/* Used for smaller/mobile screens */}
            {/* <NavDropdown title="Explore!" drop={"start"} id="dropdown">
              <NavDropdown.Item id="dropdown-item">
                {aboutSelected ? (
                  <Nav.Link>
                    <h4
                      className="links-dropdown navActive"
                      onClick={() => {
                        setAboutSelected(true);
                        setProjectSelected(false);
                        setContactSelected(false);
                        setResumeSelected(false);
                      }}
                    >
                      About Me
                    </h4>
                  </Nav.Link>
                ) : (
                  <Nav.Link>
                    <h4
                      className="links-dropdown"
                      onClick={() => {
                        setAboutSelected(true);
                        setProjectSelected(false);
                        setContactSelected(false);
                        setResumeSelected(false);
                      }}
                    >
                      About Me
                    </h4>
                  </Nav.Link>
                )}
              </NavDropdown.Item>
              <NavDropdown.Item>
                {projectSelected ? (
                  <Nav.Link>
                    <h4
                      className="links-dropdown navActive"
                      onClick={() => {
                        setProjectSelected(true);
                        setAboutSelected(false);
                        setContactSelected(false);
                        setResumeSelected(false);
                      }}
                    >
                      Portfolio
                    </h4>
                  </Nav.Link>
                ) : (
                  <Nav.Link>
                    <h4
                      className="links-dropdown"
                      onClick={() => {
                        setProjectSelected(true);
                        setAboutSelected(false);
                        setContactSelected(false);
                        setResumeSelected(false);
                      }}
                    >
                      Portfolio
                    </h4>
                  </Nav.Link>
                )}
              </NavDropdown.Item>
              <NavDropdown.Item>
                {resumeSelected ? (
                  <Nav.Link>
                    <h4
                      className="links-dropdown navActive"
                      onClick={() => {
                        setProjectSelected(false);
                        setAboutSelected(false);
                        setContactSelected(false);
                        setResumeSelected(true);
                      }}
                    >
                      Resume
                    </h4>
                  </Nav.Link>
                ) : (
                  <Nav.Link>
                    <h4
                      className="links-dropdown"
                      onClick={() => {
                        setProjectSelected(false);
                        setAboutSelected(false);
                        setContactSelected(false);
                        setResumeSelected(true);
                      }}
                    >
                      Resume
                    </h4>
                  </Nav.Link>
                )}
              </NavDropdown.Item>
            </NavDropdown> */}
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
                  className="dropdown"
                >
                  <Dropdown.Item eventKey="1">Home</Dropdown.Item>
                  {projectSelected ? (
                    <>
                      <Nav.Link>
                        <Dropdown.Item
                          eventKey="2"
                          className="links-main navActive"
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

                  <Dropdown.Item eventKey="3">
                    Resume & Experience
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="4">Contact Me</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">
                    <a href="https://github.com/jakelw96">
                      <img
                        className="gh-icon-dropdown"
                        src={ghIcon}
                        alt="GitHub Profile"
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/jacob-williams-968115206/">
                      <img
                        className="li-icon-dropdown"
                        src={linkedin}
                        alt="LinkedIn Profile"
                      />
                    </a>
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
