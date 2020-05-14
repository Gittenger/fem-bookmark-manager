import React from "react";

import { StyledButton } from "./button.styles";

const Button = ({ children, color }) => (
  <StyledButton color={color}>{children}</StyledButton>
);

export default Button;
