import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const OuterContainer = styled.div`
  ${FlexCenter}
  flex-direction: column;
  width: 1440px;
`;

export const InnerContainer = styled.div`
  ${FlexCenter}
  flex-direction: ${({ direction }) =>
    direction === "row" ? "row" : "column"};
  width: 1100px;
`;
