import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="about-heading">
              About <span>Me</span>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} style={{ paddingTop: "120px", paddingBottom: "50px" }} className="about-img">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="about-section-heading">
          Professional <span>Skillset</span>
        </h1>

        <Techstack />

        <h1 className="about-section-heading">
          <span>Tools</span> I Use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
