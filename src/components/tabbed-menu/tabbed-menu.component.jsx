import React from "react";

import { MenuContainer, MenuOption } from "./tabbed-menu.styles";

const TabbedMenu = ({ setSelected, updateTabbedDisplay }) => (
  <MenuContainer id="tabbed-menu">
    <MenuOption
      className="active"
      onClick={() => {
        setSelected(0);
      }}
    >
      Option 0
    </MenuOption>
    <MenuOption
      onClick={() => {
        setSelected(1);
      }}
    >
      Option 1
    </MenuOption>
    <MenuOption
      onClick={() => {
        setSelected(2);
      }}
    >
      Option 2
    </MenuOption>
  </MenuContainer>
);

export default TabbedMenu;
