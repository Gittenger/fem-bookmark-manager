import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const DownloadsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr minmax(2fr, 4fr);
  justify-items: center;
`;

export const DownloadsInfoContainer = styled.div`
  width: 50%;
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
`;
