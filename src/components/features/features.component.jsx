import React, { useState, useEffect, useCallback } from "react";

import InfoBox from "../info-box/info-box.component";
import TabbedMenu from "../tabbed-menu/tabbed-menu.component";
import Feature from "../feature/feature.component";

import {
  FeaturesContainer,
  InfoBoxContainer,
  MenuContainer,
} from "./features.styles";

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const updateTabbedDisplay = useCallback(() => {
    const menuItems = Array.from(
      document.getElementById("tabbed-menu").children
    );
    menuItems.forEach((item) => item.classList.remove("active"));
    menuItems[selectedFeature].classList.add("active");
  }, [selectedFeature]);

  useEffect(() => {
    updateTabbedDisplay();
  }, [updateTabbedDisplay]);

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
        <TabbedMenu setSelected={setSelectedFeature} />
      </MenuContainer>
      <Feature selection={selectedFeature} />
    </FeaturesContainer>
  );
};

export default Features;
