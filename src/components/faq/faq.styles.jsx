import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const FaqContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr minmax(2fr, 3fr) 1fr;
  justify-items: center;
`;

export const FaqInfoContainer = styled.div`
  width: 50%;
`;

export const FaqQuestions = styled.div`
  ${FlexCenter}
  flex-direction: column;
  width: 65%;
`;