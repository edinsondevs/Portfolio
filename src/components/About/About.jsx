import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/multimedia.svg";
import Toolstack from "./Toolstack";
import Projects from "../Projects/Projects";

function About() {
	return (
		<Container
			fluid
			className='about-section'>
			<Particle />
			<Container>
				<Row style={{ justifyContent: "center", padding: "10px" }}>
					<Col
						md={7}
						style={{
							justifyContent: "center",
							paddingTop: "30px",
							paddingBottom: "50px",
						}}>
						<h1
							style={{
								fontSize: "2.1em",
								paddingBottom: "20px",
							}}>
							Conozcan un poco{" "}
							<strong className='blue'>sobre mí</strong>
						</h1>
						<Aboutcard />
					</Col>
					<Col
						md={5}
						style={{ paddingTop: "120px", paddingBottom: "50px" }}
						className='about-img'>
						<img
							src={laptopImg}
							alt='about'
							className='img-fluid'
						/>
					</Col>
				</Row>
				<h1 className='project-heading'>
					Habilidades <strong className='blue'>profesionales </strong>
				</h1>
				<section>
					<Techstack />
				</section>

				<h1 className='project-heading'>
					<strong className='blue'>Herramientas</strong> que uso
				</h1>
				<Toolstack />
				<section>
					<Projects />
				</section>
				<section>
					<Github />
				</section>
			</Container>
		</Container>
	);
}

export default About;
