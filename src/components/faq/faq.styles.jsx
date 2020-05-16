import styled from "styled-components";

import { FlexCenter, device } from "../../style-utils/utils.styles";

const { mobile } = device;

export const FaqContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr minmax(2fr, 3fr) 1fr;
  justify-items: center;
  margin-bottom: 10rem;
  width: 80%;

  @media ${mobile} {
    width: 100%;
  }
`;

export const FaqInfoContainer = styled.div`
  width: 60%;
  margin-bottom: 2rem;

  @media ${mobile} {
    width: 80%;
  }
`;

export const FaqQuestions = styled.div`
  ${FlexCenter}
  flex-direction: column;
  width: 60%;
  margin-bottom: 5rem;

  @media ${mobile} {
    width: 80%;
  }
`;
