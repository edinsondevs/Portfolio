import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import Ratio from "react-bootstrap/Ratio";

function ProjectCards(props) {
	return (
		<Card className='project-card-view '>
			<Ratio aspectRatio='16x9' className="ratio my-4">
				<Card.Img
					variant='top'
					src={props.imgPath}
					alt='card-img'
					fluid
				/>
			</Ratio>

			<Card.Body style={{ maxWidth: "30rem",  }}>
				<blockquote className='blockquote mb-0'>
					<Card.Text style={{ height: "200px", marginBottom: "30px", }}>
						<p>{props.description}</p>
					</Card.Text>

					<footer className='pt-4 '>
						{!props.isBlog && props.demoLink && (
								<Button
									variant='primary'
									href={props.demoLink}
									target='_blank'
									style={{ marginLeft: "10px" }}>
									<CgWebsite /> &nbsp;
									{"Enlace a la página"}
								</Button>
						)}
					</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
}
export default ProjectCards;
