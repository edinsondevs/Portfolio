import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactMe from "./contactMe";
import Description from "./Description";

function Home2() {
	return (
		<Container
			fluid
			className='home-about-section'
			id='about'>
			<Container>
				<Row>
					<Col
						md={12}
						className='home-about-description'>
						<h1 style={{ fontSize: "2.6em" }}>
							<span className='purple'> Sabías que? ... </span>
						</h1>
						{/* <p className='home-about-body'>
							Soy Ingeniero de Sistemas y Desarrollador Web. En
							los ultimos años especializandome en el frontend,
							construyendo aplicaciones de gran envergadura y
							relevancia, usando principalmente React y varias de
							sus librerías nativas.
							<br />
							<br />
							Mis principales lenguajes de programación son:
							<i>
								<b className='purple'>
									{" "}
									Javascript, TypeScript, Node, React, entre
									otros.{" "}
								</b>
							</i>
							<br />
							<br />
							Mi campo de interés es la construcción aplicaciones
							web usando{" "}
							<b className='purple'>
								{" "}
								<i>
									{" "}
									nuevas tecnologías y web modernas. &nbsp;
								</i>
							</b>
							<br />
							<br />
							Siempre que es posible, también aplico mi pasión por
							el desarrollo de productos con &nbsp;
							<b className='purple'>
								Node.js, MongoDB, Firebase, Next.js{" "}
							</b>
							.
						</p> */}
					</Col>
					{/* <Col
						md={4}
						className='myAvtar'>
						<Tilt>
							<img
								src={myImg}
								className='img-fluid'
								alt='avatar'
							/>
						</Tilt>
					</Col> */}
					<Col>
						<div style={{ padding: 50, textAlign: "left" }}>
							<Description />
						</div>
					</Col>
				</Row>
				<Row>
					<ContactMe />
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;
