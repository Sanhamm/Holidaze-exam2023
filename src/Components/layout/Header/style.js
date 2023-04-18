import { MenuOutlined, UserOutlined } from "@ant-design/icons";
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
  &:hover {
    cursor: pointer;
  }
`;

export const UserIcon = styled(UserOutlined)`
  color: white;
  margin-right: 5px;
`;
export const MenuIcon = styled(MenuOutlined)`
  color: white;
`;

export const ImgLogo = styled.img`
  height: 40px;
`;
