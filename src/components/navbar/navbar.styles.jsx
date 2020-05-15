import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const NavContainer = styled.div`
  ${FlexCenter}
  height: 8rem;
  width: 100%;
  padding-top: 4rem;
  justify-content: space-between;
  font-size: 1.6rem;
  text-transform: uppercase;
  letter-spacing: 2px;

  nav {
    ${FlexCenter}
    width: 50%;

    ul {
      ${FlexCenter}
      width: 100%;
      justify-content: space-between;
    }
  }

  button {
    font-size: 1.6rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;
