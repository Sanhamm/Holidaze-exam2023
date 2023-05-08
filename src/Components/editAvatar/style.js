import { Link } from "react-router-dom";
import styled from "styled-components";

export const EditDiv = styled.div`
  margin: 80px auto 150px auto;
  width: 300px;
  margin: auto;
`;

export const InputDefault = styled.input`
  padding: 18px;
  border: none;
  width: 300px;
  margin: 50px 0px;
  &:focus {
    outline: 2px solid #c3752d;
  }
`;

export const BtnDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  margin: 50px 0px;
`;

export const CancelBtn = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  text-align: center;
  &:hover {
    cursor: pointer;
    color: grey;
    text-decoration: underline;
  }
`;

export const LinkStyled = styled(Link)`
  text-align: center;
  margin: auto;
`;

export const EditButton = styled.button`
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

export const EditImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 100%;
  border: 1px solid #ffbd3d;
  margin-top: 30px;
`;
