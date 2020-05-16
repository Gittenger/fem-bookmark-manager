import React from "react";

import { InnerContainer } from "../app-container/app-container.styles";

import { ReactComponent as FacebookImg } from "../../assets/icon-facebook.svg";
import { ReactComponent as TwitterImg } from "../../assets/icon-twitter.svg";

import Logo from "../../assets/logo-bookmark-white.svg";
import {
  FooterContainer,
  FooterLayout,
  FooterLinks,
  Social,
} from "./footer.styles";

const Footer = () => (
  <FooterContainer>
    <InnerContainer direction="row">
      <FooterLayout>
        <FooterLinks>
          <li>
            <a href="#">
              <img src={Logo} alt="" />
            </a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </FooterLinks>
        <Social>
          <a href="#">
            <FacebookImg />
          </a>
          <a href="#">
            <TwitterImg />
          </a>
        </Social>
      </FooterLayout>
    </InnerContainer>
  </FooterContainer>
);

export default Footer;
