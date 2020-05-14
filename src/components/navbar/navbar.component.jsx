import React from "react";

import Button from "../button/button.component";

import Logo from "../../assets/logo-bookmark.svg";
import { NavContainer } from "./navbar.styles";

const Navbar = () => (
  <NavContainer>
    <div>
      <img src={Logo} alt="" />
    </div>
    <nav>
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Contact</li>
        <li>
          <Button color="red">Login</Button>
        </li>
      </ul>
    </nav>
  </NavContainer>
);

export default Navbar;
