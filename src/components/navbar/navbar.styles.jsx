import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const NavContainer = styled.div`
  ${FlexCenter}
  height: 8rem;
  width: 100%;
  padding-top: 4rem;
  background-color: aliceblue;
  justify-content: space-between;

  nav {
    ${FlexCenter}
    width: 40%;

    ul {
      ${FlexCenter}
      width: 100%;
      justify-content: space-between;
    }
  }
`;
