import styled from "styled-components";

import { FlexCenter, device } from "../../style-utils/utils.styles";

const { mobile } = device;

export const FeaturesContainer = styled.div`
  ${FlexCenter}
  flex-direction: column;
  margin-top: 7rem;

  @media ${mobile} {
    width: 100%;
  }
`;

export const InfoBoxContainer = styled.div`
  width: 50%;
  margin-bottom: 3rem;

  @media ${mobile} {
    width: 85%;
  }
`;

export const MenuContainer = styled.div`
  width: 70%;
  margin-bottom: 8rem;
  border-bottom: 0.5px lightgrey solid;

  @media ${mobile} {
    ${FlexCenter}
    border-bottom: none;
    width: 90%;
  }
`;
