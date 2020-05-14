import React from "react";

import { MenuContainer, MenuOption } from "./tabbed-menu.styles";

const TabbedMenu = ({ selection }) => (
  <MenuContainer>
    <MenuOption className="active">Option 1</MenuOption>
    <MenuOption>Option 2</MenuOption>
    <MenuOption>Option 3</MenuOption>
  </MenuContainer>
);

export default TabbedMenu;
