import React from "react";

import { InnerContainer } from "../app-container/app-container.styles";

import Logo from "../../assets/logo-bookmark.svg";
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
            <img src={Logo} alt="" />
          </li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Contact</li>
        </FooterLinks>
        <Social>
          <div>Facebook</div>
          <div>Twitter</div>
        </Social>
      </FooterLayout>
    </InnerContainer>
  </FooterContainer>
);

export default Footer;
