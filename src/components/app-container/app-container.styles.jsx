import styled from "styled-components";

import { FlexCenter, device } from "../../style-utils/utils.styles";

const { mobile } = device;

export const OuterContainer = styled.div`
  ${FlexCenter}
  flex-direction: column;
  width: 1440px;

  @media ${mobile} {
    width: 100vw;
  }
`;

export const InnerContainer = styled.div`
  ${FlexCenter}
  flex-direction: ${({ direction }) =>
    direction === "row" ? "row" : "column"};
  width: 1100px;

    @media ${mobile} {
    width: 350px;
  }
`;
