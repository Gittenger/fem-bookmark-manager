import React from "react";

import InfoBox from "../info-box/info-box.component";
import DownloadCard from "../download-card/download-card.component";

import ImgChrome from "../../assets/logo-chrome.svg";
import ImgFirefox from "../../assets/logo-firefox.svg";
import ImgOpera from "../../assets/logo-opera.svg";
import {
  DownloadsContainer,
  DownloadsInfoContainer,
  DownloadCardsContainer,
} from "./download-links.styles";

const browsers = [
  { browser: "Chrome", imgSrc: ImgChrome, minVer: 62 },
  { browser: "Firefox", imgSrc: ImgFirefox, minVer: 55 },
  { browser: "Opera", imgSrc: ImgOpera, minVer: 46 },
];

const DownloadLinks = () => (
  <DownloadsContainer>
    <DownloadsInfoContainer>
      <InfoBox
        desc={{
          priority: "h2",
          title: "Download the extension",
          content:
            "We've got more browsers in the pipeline.Please do let us know if you've got a favorite you'd like us to prioritize.",
        }}
        alignment="center"
      />
    </DownloadsInfoContainer>
    <DownloadCardsContainer>
      {browsers.map(({ browser, imgSrc, minVer }) => (
        <DownloadCard imgSrc={imgSrc} browser={browser} minVer={minVer} />
      ))}
    </DownloadCardsContainer>
  </DownloadsContainer>
);

export default DownloadLinks;
