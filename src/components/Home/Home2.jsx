'use client';
import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactMe from "./contactMe";
import Description from "./Description";

function Home2() {

	    const descriptionRef = useRef(null);
		const [marginTop, setMarginTop] = useState(0);
	    useEffect(() => {
			if (descriptionRef.current) {
				const descriptionHeight = descriptionRef.current.offsetHeight;
				setMarginTop(descriptionHeight + 10); // Ajusta el valor según sea necesario
			}
		}, [descriptionRef]);

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
							ref={descriptionRef}
							style={{
								minHeight: 350,
								textAlign: "left",
							}}>
							<Description />
						</div>
					</Col>
				</Row>
				<Row style={{ marginTop: marginTop }}>
					<ContactMe />
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;
