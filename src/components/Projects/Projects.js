import React from "react";
import eazystore from "../../Assets/Projects/eazystore.png";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Zippy from "../../Assets/Projects/codeEditor.jpg";
import chatify from "../../Assets/Projects/chatify.jpg";
import Rental from "../../Assets/Projects/blog.jpg";
import Freelance from "../../Assets/Projects/Freelancing.jpg";
import CrudReact from "../../Assets/Projects/crud.jpg";
import SM from "../../Assets/Projects/Student.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* 1. EazyStore - Main Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eazystore}
              isBlog={false}
              title="EazyStore - Full Stack E-Commerce"
              description="A production-inspired full-stack e-commerce application built with Java 21, Spring Boot, Spring Security, JWT, JPA/Hibernate, MySQL, React, and Docker. Implemented secure authentication, role-based authorization, product and category management, shopping cart, orders, REST APIs, and layered backend architecture."
              ghLink="https://github.com/Piyush-droid996/Java_react_eccomerce.git"
              demoLink="https://java-react-eccomerce.vercel.app/"
            />
          </Col>

          {/* 2. JS Form Validation */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="JS-Form-Validation"
              description="Showcasing a registration form. JavaScript is used for client-side validation, ensuring inputs for Username, Password, Confirm Password, Mobile Number, and Email meet specified criteria, enhancing user interaction and data integrity."
              ghLink="https://github.com/Piyush-droid996/Js-validation.git"
              demoLink="https://piyush-droid996.github.io/Js-validation/"
            />
          </Col>

          {/* 3. Car Rental */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rental}
              title="Car-Rental-Java"
              description="The Car Rental System is a Java-based application designed to manage the rental of cars. It provides users with the ability to browse available vehicles, make bookings, and easily return cars after use."
              ghLink="https://github.com/Piyush-droid996/Car_Rental_System_JAVA.git"
            />
          </Col>

          {/* 4. Zippy E-Commerce */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Zippy}
              isBlog={false}
              title="Zippy E-Commerce"
              description="Zippy is an e-commerce website built using HTML, Bootstrap 5, CSS, and JavaScript. It features responsive design, product showcases, image carousels, pricing sections, blogs, and a contact form."
              ghLink="https://github.com/Piyush-droid996/LGM-VIP-PIYUSH.git"
              demoLink="https://piyush-droid996.github.io/LGM-VIP-PIYUSH/"
            />
          </Col>

          {/* 5. Student Management */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SM}
              isBlog={false}
              title="Student Management"
              description="The Student Management System is a web-based application built using Java, Spring MVC, JSP, and JavaScript. It provides CRUD operations for managing student records."
              demoLink="https://github.com/Piyush-droid996/StudentManagement.git"
            />
          </Col>

          {/* 6. CRUD React Node */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CrudReact}
              isBlog={false}
              title="CRUD REACT NODE"
              description="A CRUD application built with React for the frontend and Node.js for the backend, providing a modern and responsive interface to manage application data."
              demoLink="https://github.com/Piyush-droid996/CrudReactNodejs.git"
            />
          </Col>

          {/* 7. Freelance */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Freelance}
              isBlog={false}
              title="Freelance"
              description="A freelance job portal project designed to connect users with opportunities and services through a web-based application."
              ghLink="https://github.com/Piyush-droid996/Job_Portal.git"
              demoLink="https://piyush-droid996.github.io/Job_Portal/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
