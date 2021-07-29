import React from 'react';
import avatar from '../../assets/images/picture.jpg';

function About() {
    return (
        <section className="bio">
       <h1>About Me</h1>
       <img src={avatar} className="avatar" alt="cover" />
       <p className="bio-text">
         My name is Jacob Williams and I am a web developer. I have experience working on the front-end with<br />
         HTML, CSS, Javascript and  libraries such as React (this portfolio is built with it! Love React!), Bootstrap, and jQuery.<br />
         I also have experience with the back-end with Node.js, sequelize, express, webpack, and databases such as MongoDB and MySql.
       </p>
     </section>
    )
}

export default About;