import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import website from "../../Assets/website.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
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
							md={7}
							className='home-header'>
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
							md={5}
							style={{ paddingBottom: 20 }}>
							<img
								src={website}
								alt='home pic'
								className='img-fluid invest-image'
								style={{ maxHeight: "450px" }}
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