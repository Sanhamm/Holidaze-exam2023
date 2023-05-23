import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const BackgroundDiv = styled.div`
  background-color: #232325;
  border-bottom: 1px solid #c3752d;
`;

export const FlexDiv = styled.div`
  padding: 5px;
  display: flex;
  max-width: 1280px;
  margin: auto;
  justify-content: space-between;
  position: relative;
`;

export const LogoDiv = styled.div`
  margin: 10px;
`;

export const OuterMenuDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuDiv = styled.div`
  border: 1px solid white;
  padding: 5px 10px;
  margin-right: 10px;
  display: flex;
  &:hover {
    cursor: pointer;
  }
`;

export const UserIcon = styled(UserOutlined)`
  color: white;
  margin: auto 5px auto 0px;
`;
export const MenuIcon = styled(MenuOutlined)`
  color: white;
  margin: auto;
`;

export const ImgLogo = styled.img`
  height: 40px;
`;

export const HamburgerBackground = styled.div`
  height: 150px;
  width: 150px;
  background-color: rgb(35, 35, 37);
  display: block;
  position: absolute;
  right: 13px;
  top: 62px;
  z-index: 2;
`;

export const LiMenu = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 5px;
  display: block;
  &:hover {
    text-decoration: underline;
  }
`;

export const UlMenu = styled.ul`
  list-style-type: none;
`;

export const AvatarImg = styled.img`
  height: 20px;
  width: 20px;
  border-radius: 100%;
  border: 1px solid white;
  margin-right: 5px;
`;
