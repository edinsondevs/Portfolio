import React from "react";
import {  Row } from "react-bootstrap";

import { CardIcon } from "../shared/CardIcons";
import { ToolsStack } from "../../constants/dataStacks";

const Toolstack = () => (
  <Row style={{ justifyContent: "center" }}>
    {ToolsStack.map(({ name, Icon }) => (
      <CardIcon key={name} Icon={Icon} title={name} />
    ))}
  </Row>
);

export default Toolstack;
