import React from "react";

import InfoBox from "../info-box/info-box.component";
import TabbedMenu from "../tabbed-menu/tabbed-menu.component";
import Feature from "../feature/feature.component";

import {
  FeaturesContainer,
  InfoBoxContainer,
  MenuContainer,
} from "./features.styles";

const Features = () => {
  return (
    <FeaturesContainer>
      <InfoBoxContainer>
        <InfoBox
          desc={{
            priority: "h2",
            title: "Features",
            content:
              "Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access them on the go.",
          }}
          alignment="center"
        />
      </InfoBoxContainer>
      <MenuContainer>
        <TabbedMenu />
      </MenuContainer>
      <Feature />
    </FeaturesContainer>
  );
};

export default Features;
