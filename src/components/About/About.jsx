import React from "react";
import "./about.css";
import AboutMe from "../../assets/About_Sairam.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about" className="about__section">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutMe} alt="About" />
          </div>
        </div>
        <div className="about__content">
          {/* <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>20+ Clients</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div> */}
          <p>
            Highly motivated and skilled React Developer with a passion for
            crafting dynamic and user-friendly web applications. Aspiring to
            leverage my expertise in front-end development and proficiency in
            React.js to contribute to innovative projects that redefine the
            digital landscape. Seeking a challenging role in a collaborative
            team environment where I can continuously learn and grow while
            delivering exceptional user experiences through clean and efficient
            code. Committed to staying abreast of emerging technologies and best
            practices to create cutting-edge solutions that push the boundaries
            of web development.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
