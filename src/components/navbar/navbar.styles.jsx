import styled from "styled-components";

import { FlexCenter, device } from "../../style-utils/utils.styles";

const { mobile } = device;

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

  a {
    transition: all 0.3s;
  }

  a:hover {
    color: ${({ theme: { colors } }) => colors.softRed};
  }

  button {
    font-size: 1.6rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  nav#mobile {
    display: none;
  }

  @media ${mobile} {
    width: 95%;

    div:first-child {
      max-width: 50%;
    }

    img {
      width: 100%;
    }

    nav#normal {
      display: none;
    }

    nav#mobile {
      display: block;
      width: 4rem;

      #mobile-menu-toggle {
        width: 100%;

        img {
          width: 100%;
        }
      }

      ul {
        display: none;
      }
    }
  }
`;
