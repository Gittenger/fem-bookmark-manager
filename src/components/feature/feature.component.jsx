import React from "react";

import InfoBox from "../info-box/info-box.component";
import Button from "../button/button.component";

import FeatureImg1 from "../../assets/illustration-features-tab-1.svg";
import FeatureImg2 from "../../assets/illustration-features-tab-2.svg";
import FeatureImg3 from "../../assets/illustration-features-tab-3.svg";
import { FeatureContainer } from "./feature.styles";

const Feature = ({ selection }) => (
  <FeatureContainer>
    <div>
      <img
        src={
          selection === 0
            ? FeatureImg1
            : selection === 1
            ? FeatureImg2
            : FeatureImg3
        }
        alt=""
      />
    </div>

    <div>
      <InfoBox
        id="tabbed-menu-selection"
        desc={
          selection === 0
            ? {
                priority: "h2",
                title: "Bookmark in One Click",
                content:
                  "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.",
              }
            : selection === 1
            ? {
                priority: "h2",
                title: "Intelligent search",
                content:
                  "Our powerful search feature will help you find saved sites in no time at all. No need to twarl through all of your bookmarks.",
              }
            : {
                priority: "h2",
                title: "Share your bookmarks",
                content:
                  "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
              }
        }
        alignment="left"
      />
      <Button color="blue">More info</Button>
    </div>
  </FeatureContainer>
);

export default Feature;
