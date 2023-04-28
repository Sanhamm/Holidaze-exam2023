import React from "react";
import { HamburgerBackground, LiMenu, UlMenu } from "./style";

const HamburgerMenu = () => {
  const accessToken = localStorage.getItem("accessToken");

  console.log(typeof { accessToken });
  return (
    <HamburgerBackground>
      {accessToken === null ? (
        <UlMenu>
          <LiMenu to='/'>Home</LiMenu>
          <LiMenu to='/Login'>Login</LiMenu>
          <LiMenu to='/Register'>Register</LiMenu>
        </UlMenu>
      ) : (
        <UlMenu>
          <LiMenu to='/'>Home</LiMenu>
          <LiMenu to='/Profile/:id'>Profile</LiMenu>
          <LiMenu to='/AddVenu'>Add venue</LiMenu>
        </UlMenu>
      )}
    </HamburgerBackground>
  );
};

export default HamburgerMenu;
