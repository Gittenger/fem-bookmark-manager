import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const CardContainer = styled.div`
  ${FlexCenter}
  flex-direction: column;
  justify-content: space-evenly;
  background-color: ${({ theme: { colors } }) => colors.white};
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.04);
  margin: 0 2rem;
  padding: 3rem 0;
  border-radius: 1.5rem;

  p {
    margin: 1rem 0 4rem;
  }

  img {
    margin-bottom: 3rem;
  }

  #dot-border {
  }
`;
