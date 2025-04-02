import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import website from "../../Assets/perfil.avif";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

import Atropos from "atropos/react";
import "atropos/css";

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
							style={{
								display: "block",
								margin: "auto",
								textAlign: "center",
							}}>
							<div className='home-image'>
								<Atropos className='atropos'>
									<img
										className='background-img'
										src='https://images.unsplash.com/photo-1628818144466-856f7d477125?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
										alt=''
										srcset=''
										data-atropos-offset='-5'
									/>
									<img
										className='main-img'
										src={website}
										alt='foto-perfil'
										data-atropos-offset='0'
									/>
									<p
										className='title'
										data-atropos-offset='5'>
										Ing. Sistemas
									</p>
								</Atropos>
							</div>
						</Col>
					</Row>
				</Container>
			</Container>
			<Home2 />
		</section>
	);
}

export default Home;
