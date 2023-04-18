import React, { useState } from "react";
import Logo from "../../../media/Holidaze.svg";
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
import HamburgerMenu from "./HamburgerMenu";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

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
                console.log("open");
              } else {
                setOpenMenu(false);
                console.log("close");
              }
            }}
          >
            <UserIcon />
            <MenuIcon />
          </MenuDiv>
        </OuterMenuDiv>
      </FlexDiv>
      {openMenu === true ? <HamburgerMenu /> : ""}
    </BackgroundDiv>
  );
};

export default Header;
