import React from "react";

import { OuterContainer, InnerContainer } from "./app-container.styles";

const AppContainer = ({ children }) => (
  <OuterContainer>
    <InnerContainer>{children}</InnerContainer>
  </OuterContainer>
);

export default AppContainer;
