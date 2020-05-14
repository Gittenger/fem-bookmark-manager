import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 1rem 2em;
  background-color: ${({ theme: { colors }, color }) =>
    color === "blue"
      ? `${colors.softBlue}`
      : color === "red"
      ? `${colors.softRed}`
      : `${colors.greyBlue}`};
`;
