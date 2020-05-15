import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 1rem 2em;
  background-color: ${({ theme: { colors }, color }) =>
    color === "blue"
      ? `${colors.softBlue}`
      : color === "red"
      ? `${colors.softRed}`
      : `${colors.greyLight}`};
  color: ${({ theme: { colors }, color }) =>
    color === "blue"
      ? `${colors.white}`
      : color === "red"
      ? `${colors.white}`
      : `${colors.darkBlue}`};
  cursor: pointer;
  border-radius: 0.7rem;
  font-size: 1.4rem;
  font-weight: 500;

  &:focus {
    outline: none;
    box-shadow: ${({ theme: { colors } }) =>
      `0 0 0 1px ${colors.softBlue}, 0 1px 1px 1px rgba(0, 0, 0, 0.7)`};
  }
`;
