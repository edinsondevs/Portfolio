import React from "react";
import { Container, Row } from "react-bootstrap";
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
				<Row >
					{projects.map((project, index) => (
						<Container fluid style={{ width: "auto" }}>
						<ProjectCard
							key={index}
							imgPath={project.imgPath}
							isBlog={project.isBlog}
							title={project.title}
							description={project.description}
							// ghLink={project.ghLink}
							demoLink={project.demoLink}
							/>
						</Container>
					))}
				</Row>
			</Container>
		</Container>
  );
}

export default Projects;
