import React from "react";
import { Container } from "react-bootstrap";
import Typewriter from "typewriter-effect";

function Description() {
	return (
		<Container>
			<Typewriter
				options={{
					strings: [
						'<span style="color: white; font-size: 1.3rem; font-weight: normal">Soy Ingeniero de Sistemas y Desarrollador Web. <br> En los últimos años especializándome en el frontend, construyendo aplicaciones de gran envergadura y relevancia, usando principalmente React y varias de sus librerías nativas.</span> <span style="color: white; font-size: 1.3rem; font-weight: normal"><br> Mis principales lenguajes de programación son: <br></span> <span style="color: white; font-size: 1.3rem; font-weight: normal"><strong><span style="color: #1189ec"> Javascript, TypeScript, Node, React, entre otros.</span></strong></span> <span style="color: white; font-size: 1.3rem; font-weight: normal"><br> Mi campo de interés es la construcción de aplicaciones web usando <strong><span style="color: #1189ec ;"> nuevas tecnologías y web modernas. </span></strong></span> <span style="color: white; font-size: 1.3rem; font-weight: normal"><br> Siempre que es posible, también aplico mi pasión por el desarrollo de productos con  <strong><span style="color: #1189ec ;">Node.js, MongoDB, Firebase, Next.js </span></strong>.</span>',
					],
					autoStart: true,
					loop: false, // Cambia a true para que se repita
					delay: 0, // Velocidad de escritura
					deleteSpeed: 100000000, // No borrar
				}}
			/>
		</Container>
	);
}

export default Description;
