import React from "react";

import Button from "../button/button.component";

import Logo from "../../assets/logo-bookmark.svg";
import HamburgerMenu from "../../assets/icon-hamburger.svg";
import { NavContainer } from "./navbar.styles";

const Navbar = () => (
  <NavContainer>
    <div>
      <img src={Logo} alt="" />
    </div>
    <nav id="normal">
      <ul>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <Button color="red">Login</Button>
        </li>
      </ul>
    </nav>
    <nav id="mobile">
      <div id="mobile-menu-toggle">
        <img src={HamburgerMenu} alt="" />
      </div>
      <ul>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <Button color="red">Login</Button>
        </li>
      </ul>
    </nav>
  </NavContainer>
);

export default Navbar;
