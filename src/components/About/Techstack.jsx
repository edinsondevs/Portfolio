import React from "react";
import { Row } from "react-bootstrap";

import { CardIcon } from "../shared/CardIcons";
import { techStack } from "../../constants/dataStacks";

const Techstack = () => (
	<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
		{techStack.map(({ name, Icon }) => (
			<CardIcon key={name} Icon={Icon} title={name} />
		))}
	</Row>
);


export default Techstack;
