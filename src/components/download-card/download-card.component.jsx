import React from "react";

import InfoBox from "../info-box/info-box.component";

import { CardContainer, DotBorder } from "./download-card.styles";

const DownloadCard = ({ imgSrc, browser, minVer }) => (
  <CardContainer>
    <img src={imgSrc} alt="" />
    <InfoBox
      desc={{
        priority: "h3",
        title: `Add to ${browser}`,
        content: `Minimum version ${minVer}`,
      }}
    />
    <DotBorder />
    <button>Add & Install Extension</button>
  </CardContainer>
);

export default DownloadCard;
