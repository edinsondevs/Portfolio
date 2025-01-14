"use client";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactMe from "./contactMe";
import Description from "./Description";

function Home2() {
	const [descriptionHeight, setDescriptionHeight] = useState(350); // Altura por defecto

	useEffect(() => {
		// Función para actualizar la altura del componente Description
		const updateHeight = () => {
			if (window.innerWidth < 768) {
				// Pantallas móviles
				setDescriptionHeight(750); // Altura para móviles
			} else {
				setDescriptionHeight(450); // Altura para pantallas más grandes
			}
		};

		// Llama a la función al cargar el componente
		updateHeight();

		// Agrega un listener para el resize
		window.addEventListener("resize", updateHeight);

		// Limpia el listener al desmontar el componente
		return () => {
			window.removeEventListener("resize", updateHeight);
		};
	}, []);

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
					</Col>
					<Col className='d-flex'>
						<div
							style={{
								minHeight: descriptionHeight,
								textAlign: "left",
							}}>
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
