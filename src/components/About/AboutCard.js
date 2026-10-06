import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="about-highlight">Piyush Saxena</span>.
            <br />
            <br />I am currently based in <span className="about-highlight">Bengaluru, Karnataka, India</span> and working as an{" "}
            <span className="about-highlight">Software Engineer at Capgemini</span>.
            <br />
            <br />I have completed my <span className="about-highlight">PG-DAC</span> from CDAC Bengaluru and hold a{" "}
            <span className="about-highlight">B.Tech in Computer Science & Engineering</span> from Jaipur National University.
            <br />
            <br />
            My expertise lies in <span className="about-highlight">Java, Spring Boot, REST APIs, SQL, Microservices, and React</span>
            . I enjoy building scalable applications, solving backend challenges, and continuously improving my problem-solving skills.
            <br />
            <br />
            Apart from coding, here are a few things I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving DSA Problems
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Thriller Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Following Cricket
            </li>
          </ul>

          <footer className="blockquote-footer">Piyush Saxena</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
