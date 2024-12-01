import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack
} from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";

const titleOptions = ["VsCode", "Postman", "Slack", "Github"];

function Toolstack() {

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" >
        <SiVisualstudiocode />
        <p className="tech-icons-title" >{titleOptions[0]}</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p className="tech-icons-title" >{titleOptions[1]}</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <p className="tech-icons-title" >{titleOptions[2]}</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons"  >
        <VscGithubInverted />
        <p className="tech-icons-title" >{titleOptions[3]}</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
