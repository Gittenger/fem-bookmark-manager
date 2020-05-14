import React from "react";

import InfoBox from "../info-box/info-box.component";
import Button from "../button/button.component";

import HeroImg from "../../assets/illustration-hero.svg";
import { HeroContainer } from "./hero.styles";

const Hero = () => (
  <HeroContainer>
    <div>
      <InfoBox
        desc={{
          priority: "h1",
          title: "A Simple Bookmark Manager",
          content:
            "A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.",
        }}
        alignment="left"
      />
      <Button color="blue">Get it on Chrome</Button>
      <Button color="grey">Get it on Firefox</Button>
    </div>

    <div>
      <img src={HeroImg} alt="" />
    </div>
  </HeroContainer>
);

export default Hero;
