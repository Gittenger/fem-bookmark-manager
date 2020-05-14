import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const CardContainer = styled.div`
  ${FlexCenter}
  flex-direction: column;
  justify-content: space-evenly;
  background-color: lightgrey;
`;

export const DotBorder = styled.div`
  height: 5px;
  border-top: dotted 3px grey;
`;
