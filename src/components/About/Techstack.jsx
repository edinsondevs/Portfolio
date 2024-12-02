import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { SiFirebase, SiPostgresql } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";

const titleOptions = [
  "Html5",
  "Typescript",
  "Javascript",
  "React",
  "Node",
  "MongoDB",
  "Git",
  "Firebase",
  "Postgresql",
  "Css3",
  "Redux",
];



function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5  />
        <p className="tech-icons-title" >{titleOptions[0]}</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt   />
        <p className="tech-icons-title" >{titleOptions[9]}</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandTypescript  />
        <p className="tech-icons-title" >{titleOptions[1]}</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p className="tech-icons-title" >{titleOptions[2]}</p>
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="tech-icons-title" >{titleOptions[3]}</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p className="tech-icons-title" >{titleOptions[4]}</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p className="tech-icons-title" >{titleOptions[5]}</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p className="tech-icons-title" >{titleOptions[6]}</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p className="tech-icons-title" >{titleOptions[7]}</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p className="tech-icons-title" >{titleOptions[8]}</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandRedux />
        <p className="tech-icons-title" >{titleOptions[10]}</p>
      </Col>
    </Row>
  );
}

export default Techstack;
