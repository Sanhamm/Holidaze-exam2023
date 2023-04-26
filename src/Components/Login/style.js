import { Link } from "react-router-dom";
import styled from "styled-components";

export const InputDefault = styled.input`
  padding: 18px;
  border: none;
  width: 300px;
  margin: 20px 0px;
  justify-content: center;
  &:focus {
    outline: 2px solid #c3752d;
  }
`;

export const LoginDiv = styled.div`
  margin: 80px auto 150px auto;
  width: 300px;
  margin: auto;
`;

export const LoginButton = styled.button`
  padding: 10px 30px;
  border-radius: 0;
  border: 1px solid #ffbd3d;
  background-color: #ffbd3d;
  &:hover {
    cursor: pointer;
    background-color: #ffcb65;
    border: 1px solid #ffcb65;
  }
`;

export const H1Login = styled.h1`
  color: #ffbd3d;
  font-size: 1.9rem;
  text-align: center;
`;

export const PLogin = styled.p`
  color: #ededed;
  margin: 50px 0px;
`;

export const LinkLogin = styled(Link)`
  color: #ffbd3d;
  text-decoration: underline;
`;

export const LogoLogin = styled.img`
  display: block;
  margin: 80px auto;
`;

export const InputDiv = styled.div`
  margin-top: 10px;
`;
