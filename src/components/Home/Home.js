import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import homeLogo from "../../Assets/Home-main.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />

        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <div className="hero-label">SOFTWARE ENGINEER · JAVA BACKEND · TECH ENTHUSIAST</div>

              <h1 className="heading">
                Hi, I'm{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋
                </span>
              </h1>

              <h1 className="heading-name">
                <strong className="main-name">Piyush Saxena</strong>
              </h1>

              <p className="hero-description">I build reliable backend systems, REST APIs and microservices using Java and Spring Boot.</p>

              <div className="hero-type">
                <Type />
              </div>

              <div className="hero-actions">
                <Link to="/project" className="hero-btn hero-btn-primary">
                  View Projects
                </Link>

                <Link to="/resume" className="hero-btn hero-btn-secondary">
                  View Resume
                </Link>
              </div>
            </Col>

            <Col md={5} className="hero-visual">
              <div className="hero-visual-frame">
                <div className="hero-grid"></div>

                <img src={homeLogo} alt="Piyush Saxena developer illustration" className="img-fluid hero-image" />

                <div className="hero-status">
                  <span className="status-dot"></span>
                  JAVA · SPRING BOOT · REST
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;
