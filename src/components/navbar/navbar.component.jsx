import React from "react";

import LogoImg from "../../assets/logo-bookmark.svg";
import { NavContainer } from "./navbar.styles";

const Navbar = () => (
  <NavContainer>
    <div>
      <img src={LogoImg} alt="" />
    </div>
    <nav>
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Contact</li>
        <li>Login</li>
      </ul>
    </nav>
  </NavContainer>
);

export default Navbar;
