import styled from "styled-components";

import { FlexCenter, device } from "../../style-utils/utils.styles";

const { mobile } = device;

export const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  width: 100%;

  @media ${mobile} {
    grid-template-columns: 1fr;
    width: 90%;
  }
`;

export const MenuOption = styled.div`
  ${FlexCenter}
  padding: 2rem 0;
  cursor: pointer;
  transition: color 0.3s;

  &.active {
    border-bottom: red 2.5px solid;
  }

  &:hover {
    color: ${({ theme: { colors } }) => colors.softRed};
  }

  @media ${mobile} {
    border-bottom: 0.5px lightgrey solid;

    &:hover {
      color: inherit;
    }
  }
`;
