import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { projects } from "../../constants/dataStacks";


function Projects() {
  return (
		<Container
			fluid
			className='project-section'>
			<Particle />
			<Container>
				<h1 className='project-heading'>
					Mis Recientes <strong className='blue'>Trabajos </strong>
				</h1>
				<p style={{ color: "white" }}>
					A continuación mostraré algunos proyectos en los que he
					trabajado.
				</p>
				<Row xs={1} md={2} className="g-4" >
					{projects.map((project, index) => (
					<Col key={index}>
						<Container fluid style={{ width: 'auto' , height:'100%' }} >
						<ProjectCard
							key={index}
							imgPath={project.imgPath}
							isBlog={project.isBlog}
							title={project.title}
							description={project.description}
							demoLink={project.demoLink}
							/>
						</Container>
					</Col>
					))}
				</Row>
			</Container>
		</Container>
  );
}

export default Projects;
