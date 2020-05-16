import styled from "styled-components";

import { FlexCenter, device } from "../../style-utils/utils.styles";

const { mobile } = device;

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 11rem;

  button:last-child {
    margin-left: 2rem;
  }

  @media ${mobile} {
    width: 100%;
    grid-template-columns: 1fr;
    justify-items: center;

    div:first-child {
      grid-row: 2 / 3;
      width: 90%;
    }

    div:last-child {
      grid-row: 1 / 2;
      width: 90%;

      img {
        width: 100%;
      }
    }
  }
`;
