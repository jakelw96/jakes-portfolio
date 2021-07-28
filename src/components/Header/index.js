import React, { useState } from 'react'
import Navigation from '../Nav';
import Project from '../Project';
import ContactForm from '../Contact';
import Resume from '../Resume';
import About from '../About';

function Header() {
    const [contactSelected, setContactSelected] = useState(false);
    const [aboutSelected, setAboutSelected] = useState(true);
    const [projectSelected, setProjectSelected] = useState(false);
    const [resumeSelected, setResumeSelected] = useState(false);
  
    
    return (
        <div>
            <header>
                <Navigation
                    contactSelected={contactSelected}
                    setContactSelected={setContactSelected}
                    aboutSelected={aboutSelected}
                    setAboutSelected={setAboutSelected}
                    projectSelected={projectSelected}
                    setProjectSelected={setProjectSelected}
                    resumeSelected={resumeSelected}
                    setResumeSelected={setResumeSelected}
                ></Navigation>
            </header>
            <main>
                {aboutSelected && (
                    <About></About>
                )}
                {projectSelected && (
                    <Project></Project>
                )}
                {contactSelected && (
                    <ContactForm></ContactForm>
                )}
                {resumeSelected && (
                    <Resume></Resume>
                )}
                </main>
        </div>
    )
}

export default Header;