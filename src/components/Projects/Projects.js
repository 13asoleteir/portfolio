import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="PC Parts"
              description="PC Parts is a dynamic computer shop website that I designed and developed using Angular, showcasing my proficiency in front-end development and user interface design. This project was a comprehensive exploration of building a responsive and feature-rich e-commerce platform tailored for tech enthusiasts."
              ghLink="https://github.com/13asoleteir/angular-pc-shop"
              demoLink="https://angular-pc-shop.vercel.app/home"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
