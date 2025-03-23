import { Col } from "react-bootstrap";

/* Componente para cada tecnología individual */
export const CardIcon = ({ Icon, title }) => (
	<Col
		xs={4}
		md={2}
		className='tech-icons'>
		<Icon />
		<p className='tech-icons-title'>{title}</p>
	</Col>
);