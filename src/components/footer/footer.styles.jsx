import styled from "styled-components";

import { FlexCenter, device } from "../../style-utils/utils.styles";

const { mobile } = device;

export const FooterContainer = styled.footer`
  ${FlexCenter}
  width: 100%;
  background-color: ${({ theme: { colors } }) => `${colors.darkBlue}`};
  color: ${({ theme: { colors } }) => `${colors.white}`};
  a {
    transition: all 0.3s;
  }
`;

export const FooterLayout = styled.div`
  ${FlexCenter}
  justify-content: space-between;
  width: 100%;

  @media ${mobile} {
    flex-direction: column;
  }
`;

export const FooterLinks = styled.footer`
  ${FlexCenter}
  justify-content: space-between;
  padding: 2.5rem;

  li {
    margin: 0 3rem;
  }

  a:hover {
    color: ${({ theme: { colors } }) => colors.softRed};
  }

  @media ${mobile} {
    flex-direction: column;

    li {
      margin: 1rem 0;
    }
  }
`;

export const Social = styled.footer`
  ${FlexCenter}
  justify-content: space-between;

  & > * {
    margin: 0 3rem;
  }

  path {
    transition: all 0.3s;
  }

  svg:hover {
    path {
      fill: ${({ theme: { colors } }) => colors.softRed};
    }
  }
`;
