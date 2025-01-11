import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import website from "../../Assets/website.svg";
import website from "../../Assets/perfil.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
	// Puedes usar el estado o props para determinar el tamaño actual si es necesario
	const isSmallScreen = window.innerWidth < 576; // xs
	const isMediumScreen = window.innerWidth >= 576 && window.innerWidth < 1300; // sm

	// Determina si se debe aplicar la clase
	const className = isSmallScreen || isMediumScreen ? "" : "home-header";

	return (
		<section>
			<Container
				fluid
				className='home-section'
				id='home'>
				<Particle />
				<Container className='home-content'>
					<Row>
						<Col
							md={9}
							sm={8}
							xs={12}
							className={className}>
							<h1
								style={{ paddingBottom: 15 }}
								className='heading'>
								Hola!{" "}
								<span
									className='wave'
									role='img'
									aria-labelledby='wave'>
									👋🏻
								</span>
							</h1>

							<h1 className='heading-name'>
								Soy
								<strong className='main-name'>
									{" "}
									Edinson Madrid
								</strong>
							</h1>

							<div style={{ padding: 50, textAlign: "left" }}>
								<Type />
							</div>
						</Col>

						<Col
							md={3}
							sm={8}
							xs={12}
							style={{ paddingBottom: 10 }}>
							<img
								src={website}
								alt='home pic'
								className='invest-image shadow-lg'
								style={{
									maxHeight: "450px",
									filter: "drop-shadow(0 0 1)",
									boxShadow: "0 0 50px rgba(0, 0, 0, 0.9)", 
									maskImage: 'linear-gradient(white 80%, transparent)',
								}}
							/>
						</Col>
					</Row>
				</Container>
			</Container>
			<Home2 />
		</section>
	);
}

export default Home;
