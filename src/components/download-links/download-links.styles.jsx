import styled from "styled-components";

import { FlexCenter, device } from "../../style-utils/utils.styles";

const { mobile } = device;

export const DownloadsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr minmax(2fr, 4fr);
  justify-items: center;
  margin: 15rem 0 10rem;

  @media ${mobile} {
    width: 100%;
  }
`;

export const DownloadsInfoContainer = styled.div`
  width: 80%;
`;

export const DownloadCardsContainer = styled.div`
  ${FlexCenter}
  padding: 5rem 0;

  & > *:first-child {
    transform: translateY(-20px);
  }

  & > *:last-child {
    transform: translateY(20px);
  }

  @media ${mobile} {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;

    & > *:first-child,
    & > *:last-child {
      transform: translateY(0);
    }
  }
`;
