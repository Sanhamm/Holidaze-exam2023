import React, { useState } from "react";
import Logo from "../../../media/Holidaze.svg";
import { AvatarImg, HamburgerBackground, LiMenu, UlMenu } from "./style";

import {
  BackgroundDiv,
  FlexDiv,
  ImgLogo,
  LogoDiv,
  MenuDiv,
  MenuIcon,
  OuterMenuDiv,
  UserIcon,
} from "./style";
import { Link } from "react-router-dom";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const accessToken = localStorage.getItem("accessToken");
  const userName = JSON.parse(localStorage.getItem("name"));
  const avatar = JSON.parse(localStorage.getItem("avatar"));
  console.log(avatar);

  return (
    <BackgroundDiv>
      <FlexDiv>
        <LogoDiv>
          <Link to='/'>
            <ImgLogo src={Logo} alt='Logo holidaze' />
          </Link>
        </LogoDiv>
        <OuterMenuDiv>
          <MenuDiv
            onClick={() => {
              if (openMenu === false) {
                setOpenMenu(true);
              } else {
                setOpenMenu(false);
              }
            }}
          >
            {avatar === null ? (
              <UserIcon />
            ) : (
              <AvatarImg src={avatar} alt='avatar for user' />
            )}
            <MenuIcon />
          </MenuDiv>
        </OuterMenuDiv>
      </FlexDiv>
      {openMenu ? (
        <HamburgerBackground>
          {accessToken === null ? (
            <UlMenu>
              <LiMenu to='/' onClick={() => setOpenMenu(false)}>
                Home
              </LiMenu>
              <LiMenu to='/Login' onClick={() => setOpenMenu(false)}>
                Login
              </LiMenu>
              <LiMenu to='/Register' onClick={() => setOpenMenu(false)}>
                Register
              </LiMenu>
            </UlMenu>
          ) : (
            <UlMenu>
              <LiMenu to='/' onClick={() => setOpenMenu(false)}>
                Home
              </LiMenu>
              <LiMenu
                to={`/Profile/${userName}`}
                onClick={() => setOpenMenu(false)}
              >
                Profile
              </LiMenu>
              <LiMenu to='/AddVenue' onClick={() => setOpenMenu(false)}>
                Add venue
              </LiMenu>
              <LiMenu
                to='/'
                onClick={() => {
                  setOpenMenu(false);
                  localStorage.clear();
                }}
              >
                Logout
              </LiMenu>
            </UlMenu>
          )}
        </HamburgerBackground>
      ) : (
        ""
      )}
    </BackgroundDiv>
  );
};

export default Header;
