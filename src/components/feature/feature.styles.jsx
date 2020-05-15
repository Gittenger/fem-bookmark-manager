import styled from "styled-components";

export const FeatureContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  #tabbed-menu-selection {
    width: 85%;
  }

  div:last-child {
    padding-left: 2rem;
  }
`;
