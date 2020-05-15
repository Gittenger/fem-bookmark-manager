import styled, { css } from "styled-components";

const ButtonStyles = css`
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
  transition: all 0.3s;

  &:focus {
    outline: none;
    box-shadow: ${({ theme: { colors } }) =>
      `0 0 0 1px ${colors.softBlue}, 0 1px 1px 1px rgba(0, 0, 0, 0.7)`};
  }

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.white};
    color: ${({ theme: { colors }, color }) =>
      color === "blue"
        ? `${colors.softBlue}`
        : color === "red"
        ? `${colors.softRed}`
        : `${colors.darkBlue}`};
    border: ${({ theme: { colors }, color }) =>
      color === "blue"
        ? `1.5px solid ${colors.softBlue}`
        : color === "red"
        ? `1.5px solid ${colors.softRed}`
        : `1.5px solid ${colors.darkBlue}`};
  }

  &:active {
    background-color: ${({ theme: { colors }, color }) =>
      color === "blue"
        ? `${colors.softBlue}`
        : color === "red"
        ? `${colors.softRed}`
        : `${colors.darkBlue}`};
    color: ${({ theme: { colors } }) => colors.white};
    border: ${({ theme: { colors }, color }) =>
      color === "blue"
        ? `1.5px solid ${colors.softBlue}`
        : color === "red"
        ? `1.5px solid ${colors.softRed}`
        : `1.5px solid ${colors.darkBlue}`};
  }
`;

export const StyledButton = styled.button`
  ${ButtonStyles}
`;

export const StyledSubmitButton = styled.input`
  ${ButtonStyles}
`;
