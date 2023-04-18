import { Link } from "react-router-dom";
import styled from "styled-components";

export const HamburgerBackground = styled.div`
  height: 130px;
  width: 150px;
  background-color: rgb(35, 35, 37);
  display: block;
  position: absolute;
  right: 50px;
  top: 62px;
  z-index: 1;
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
