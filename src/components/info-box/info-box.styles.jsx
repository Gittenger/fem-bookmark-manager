import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const InfoBoxContainer = styled.div`
  ${FlexCenter}
  flex-direction: column;
  align-items: ${({ alignment }) =>
    alignment === "center" ? "center" : "flex-start"};
`;
