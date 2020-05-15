import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 1rem 2em;
  background-color: ${({ theme: { colors }, color }) =>
    color === "blue"
      ? `${colors.softBlue}`
      : color === "red"
      ? `${colors.softRed}`
      : `${colors.greyLight}`};
  cursor: pointer;
  border-radius: 1rem;

  &:focus {
    outline: none;
    box-shadow: ${({ theme: { colors } }) =>
      `0 0 0 1px ${colors.softBlue}, 0 1px 1px 1px rgba(0, 0, 0, 0.7)`};
  }
`;
