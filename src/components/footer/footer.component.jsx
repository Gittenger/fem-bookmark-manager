import React from "react";

import Logo from "../../assets/logo-bookmark.svg";
import { FooterContainer, FooterLinks, Social } from "./footer.styles";

const Footer = () => (
  <FooterContainer>
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
  </FooterContainer>
);

export default Footer;
