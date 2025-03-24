import React from "react";

import { Row } from "react-bootstrap";
import { CalendarGitHub } from "../shared/CalendarGitHub";

function Github() {
	return (
		<Row
			style={{
				justifyContent: "center",
				paddingBottom: "10px",
				gap: "2rem",
			}}>
			<h1
				className='project-heading'
				style={{ paddingBottom: "10px" }}>
				Días de <strong className='blue'>codificación</strong> personal
			</h1>
			<footer className='blockquote-footer'>
				<cite title='Source Title'>
					En el 2024 he dedicado mas tiempo a codificación para
					empresas, por lo que no se refleja en mi github personal{" "}
				</cite>
				.
			</footer>
			
			<CalendarGitHub year={2025} />
			<CalendarGitHub year={2024} />
			<CalendarGitHub year={2023} />
		</Row>
	);
}

export default Github;
