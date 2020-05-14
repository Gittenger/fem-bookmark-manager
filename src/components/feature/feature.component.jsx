import React from "react";

import InfoBox from "../info-box/info-box.component";

import FeatureImg from "../../assets/illustration-features-tab-1.svg";
import { FeatureContainer } from "./feature.styles";

const Feature = () => (
  <FeatureContainer>
    <div>
      <img src={FeatureImg} alt="" />
    </div>

    <div>
      <InfoBox
        desc={{
          priority: "h2",
          title: "Bookmark in One Click",
          content:
            "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.",
        }}
        alignment="center"
      />
      <button>More info</button>
    </div>
  </FeatureContainer>
);

export default Feature;
