import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const FooterContainer = styled.footer`
  ${FlexCenter}
  width: 100%;
  background-color: ${({ theme: { colors } }) => `${colors.darkBlue}`};
  color: ${({ theme: { colors } }) => `${colors.white}`};
`;

export const FooterLayout = styled.div`
  ${FlexCenter}
  justify-content: space-between;
  width: 100%;
`;

export const FooterLinks = styled.footer`
  ${FlexCenter}
  justify-content: space-between;
`;

export const Social = styled.footer`
  ${FlexCenter}
  justify-content: space-between;
`;
