import React from "react";

import { StyledButton, StyledSubmitButton } from "./button.styles";

const Button = ({ children, color, submit, value }) =>
  submit ? (
    <StyledSubmitButton type="submit" value={value} color={color} />
  ) : (
    <StyledButton color={color}>{children}</StyledButton>
  );

export default Button;
