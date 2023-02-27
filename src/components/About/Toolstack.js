import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  
  SiVercel,

  SiGithub,
  SiGooglecolab,
  SiPycharm,SiAnaconda,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda  />
      </Col>
    </Row>
  );
}

export default Toolstack;
