import React from "react";
import Card from "react-bootstrap/Card";
import { FaRegHandPointRight } from "react-icons/fa";
function AboutCard() {
	return (
		<Card className='quote-card-view'>
			<Card.Body>
				<blockquote className='blockquote mb-0'>
					<p style={{ textAlign: "justify" }}>
						Hola a todos, soy{" "}
						<span className='purple'>Edinson Madrid </span> un
						<span className='purple'> Venezolano</span> trabajador,
						profesional, autodidacta y responsable viviendo en{" "}
						<span className='purple'>Argentina </span> desde hace{" "}
						<span className='purple'>
							{new Date().getFullYear() - 2016} años
						</span>
						.
						<br />
						<br />
						Actualmente trabajo como{" "}
						<span className='purple'>
							Software Engineer{" "}
						</span>en{" "}
						<span className='purple'>NTT Data Argentina</span>
						.
						<br />
						<br />
						Soy Ingeniero de Sistemas, ademas me formé como
						FullStack Developer, pero estoy mas enfocado en la parte
						Frontend.
						<br />
						<br />
						¡Además de codificar, hay otras actividades que me
						encanta hacer!
					</p>
					<ul>
						<li className='about-activity'>
							<FaRegHandPointRight className='purple' /> Jugar
							Video Juegos.
						</li>
						<li className='about-activity'>
							<FaRegHandPointRight className='purple' /> Andar en
							bici.
						</li>
						<li className='about-activity'>
							<FaRegHandPointRight className='purple' />{" "}
							Investigar nuevas tecnologias.
						</li>
					</ul>
					<br />

					<p style={{ color: "rgb(155 126 172)" }}>
						"El verdadero éxito consiste en hacer lo que amas y
						hacerlo bien!"{" "}
					</p>
					<footer className='blockquote-footer'>
						Autor desconocido.
					</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
