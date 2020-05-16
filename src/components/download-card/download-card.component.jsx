import React from "react";

import InfoBox from "../info-box/info-box.component";
import Button from "../button/button.component";

import DotBorder from "../../assets/bg-dots.svg";
import { CardContainer } from "./download-card.styles";

const DownloadCard = ({ imgSrc, browser, minVer }) => (
  <CardContainer>
    <img src={imgSrc} alt="" />
    <InfoBox
      desc={{
        priority: "h3",
        title: `Add to ${browser}`,
        content: `Minimum version ${minVer}`,
      }}
      alignment="center"
    />
    <div id="dot-border">
      <img src={DotBorder} alt="" />
    </div>
    <Button color="blue">Add & Install Extension</Button>
  </CardContainer>
);

export default DownloadCard;
