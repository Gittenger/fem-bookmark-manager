import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const Question = styled.div`
  ${FlexCenter}
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0;
  border-bottom: lightgrey 1px solid;

  &:first-child {
    border-top: lightgrey 1px solid;
  }

  & > p {
    color: ${({ theme: { colors } }) => colors.darkBlue};
  }
`;
