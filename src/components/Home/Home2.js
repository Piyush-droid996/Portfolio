import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Passport_Photograph_..jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1>
              LET ME <span className="home-highlight">INTRODUCE</span> MYSELF
            </h1>

            <p className="home-about-body">
              Hi, I'm <span className="home-highlight">Piyush Saxena</span>, a Software Engineer focused on building reliable backend applications.
              <br />
              <br />I work primarily with <span className="home-highlight">Java, Spring Boot, REST APIs, SQL, and Microservices</span>
              . I enjoy solving backend problems, developing APIs, debugging production issues, and improving application reliability.
              <br />
              <br />
              My experience includes working on <span className="home-highlight">enterprise applications</span> and building full-stack projects using
              Java, Spring Boot, React, and MySQL.
              <br />
              <br />
              I'm continuously improving my skills in <span className="home-highlight">backend development, system design, and problem solving</span>.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt className="home-profile-frame">
              <img src={myImg} className="img-fluid" alt="Piyush Saxena" />
            </Tilt>
          </Col>
        </Row>

        {/* <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>

            <p>
              Feel free to <span className="home-highlight">connect</span> with me
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a href="https://github.com/Piyush-droid996" target="_blank" rel="noreferrer" className="home-social-icons" aria-label="GitHub">
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/piyush--saxena/"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Home2;
