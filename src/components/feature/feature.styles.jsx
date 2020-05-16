import styled from "styled-components";

import { device } from "../../style-utils/utils.styles";

const { mobile } = device;

export const FeatureContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  #tabbed-menu-selection {
    width: 85%;
  }

  div:last-child {
    padding-left: 2rem;
  }

  @media ${mobile} {
    width: 100%;
    grid-template-columns: 1fr;
    justify-items: center;

    & > div {
      width: 100%;

      img {
        width: 100%;
      }
    }

    & > div:first-child {
      width: 85%;
    }
  }
`;
