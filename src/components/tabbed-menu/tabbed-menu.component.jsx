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
      Simple Bookmarking
    </MenuOption>
    <MenuOption
      onClick={() => {
        setSelected(1);
      }}
    >
      Speedy Searching
    </MenuOption>
    <MenuOption
      onClick={() => {
        setSelected(2);
      }}
    >
      Easy Sharing
    </MenuOption>
  </MenuContainer>
);

export default TabbedMenu;
