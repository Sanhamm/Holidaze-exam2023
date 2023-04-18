import React from "react";
import { HamburgerBackground, LiMenu, UlMenu } from "./style";

const HamburgerMenu = () => {
  return (
    <HamburgerBackground>
      <UlMenu>
        <LiMenu to='/Login'>Login</LiMenu>
        <LiMenu to='/Register'>Register</LiMenu>
      </UlMenu>
    </HamburgerBackground>
  );
};

export default HamburgerMenu;
