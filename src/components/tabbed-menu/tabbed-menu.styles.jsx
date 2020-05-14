import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  width: 100%;
`;

export const MenuOption = styled.div`
  ${FlexCenter}
  padding: 2rem 0;

  &.active {
    border-bottom: red 2.5px solid;
  }
`;
