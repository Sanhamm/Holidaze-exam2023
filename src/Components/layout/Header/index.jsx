import React, { useState } from "react";
import Logo from "../../../media/Holidaze.svg";
import {
  AvatarImg,
  DesktopMenu,
  DesktopMenuDiv,
  HamburgerBackground,
  HamburgerBackgroundDesktop,
  LiMenu,
  UlMenu,
  UserIconDesktop,
} from "./style";

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
  const [openProfile, setProfileMenu] = useState(false);
  const accessToken = localStorage.getItem("accessToken");
  const userName = JSON.parse(localStorage.getItem("name"));
  const avatar = JSON.parse(localStorage.getItem("avatar"));

  return (
    <BackgroundDiv>
      <FlexDiv>
        <LogoDiv>
          <Link to='/'>
            <ImgLogo src={Logo} alt='Logo holidaze' />
          </Link>
        </LogoDiv>
        {accessToken ? (
          <DesktopMenuDiv>
            <LiMenu to='/' onClick={() => setProfileMenu(false)}>
              Home
            </LiMenu>
            <LiMenu to='/AddVenue' onClick={() => setProfileMenu(false)}>
              Add venue
            </LiMenu>
            {avatar === null || avatar === "" ? (
              <UserIconDesktop
                onClick={() => {
                  if (openProfile === false) {
                    setProfileMenu(true);
                  } else {
                    setProfileMenu(false);
                  }
                }}
              />
            ) : (
              <AvatarImg
                src={avatar}
                alt='avatar for user'
                onClick={() => {
                  if (openProfile === false) {
                    setProfileMenu(true);
                  } else {
                    setProfileMenu(false);
                  }
                }}
              />
            )}
          </DesktopMenuDiv>
        ) : (
          <DesktopMenuDiv>
            <LiMenu to='/'>Home</LiMenu>
            <LiMenu to='/Login'>Login</LiMenu>
            <LiMenu to='/Register'>Register</LiMenu>
          </DesktopMenuDiv>
        )}
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
            {avatar === null || avatar === "" ? (
              <UserIcon />
            ) : (
              <AvatarImg src={avatar} alt='avatar for user' />
            )}
            <MenuIcon />
          </MenuDiv>
        </OuterMenuDiv>
        {openProfile ? (
          <HamburgerBackgroundDesktop>
            <UlMenu>
              <LiMenu
                to={`/Profile/${userName}`}
                onClick={() => setProfileMenu(false)}
              >
                Profile
              </LiMenu>
              <LiMenu
                to='/'
                onClick={() => {
                  setProfileMenu(false);
                  localStorage.clear();
                }}
              >
                Logout
              </LiMenu>
            </UlMenu>
          </HamburgerBackgroundDesktop>
        ) : (
          ""
        )}

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
      </FlexDiv>
    </BackgroundDiv>
  );
};

export default Header;
