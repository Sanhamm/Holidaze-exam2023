import { Link } from "react-router-dom";
import styled from "styled-components";

export const InputDefault = styled.input`
  padding: 18px;
  border: none;
  width: 100%;
  margin: 20px 0px;
  &:focus {
    outline: 2px solid #c3752d;
  }
`;

export const AddVenueDiv = styled.div`
  margin: 80px auto 150px auto;
  width: 300px;
  margin: auto;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 18px;
  resize: none;
  &:focus {
    outline: 2px solid #c3752d;
  }
`;

export const CheckBoxDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 20px 0px;
`;

export const LabelStyled = styled.label`
  color: white;
`;

export const LogoAddVenue = styled.img`
  display: block;
  margin: 80px auto;
`;
export const H1AddVenue = styled.h1`
  color: #ffbd3d;
  font-size: 1.9rem;
  text-align: center;
`;
export const InputDiv = styled.div`
  margin: 40px 0px;
`;

export const AddVenuButton = styled.button`
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

export const AddMoreBTn = styled.button`
  background-color: transparent;
  color: white;
  padding: 10px;
  border: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ErrorMsg = styled.span`
  color: #ffbd3d;
`;
export const NotVenueH1 = styled.h1`
  color: #ffbd3d;
  text-align: center;
  margin-top: 90px;
`;
export const NotVenueP = styled.p`
  color: white;
  text-align: center;
  width: 500px;
  margin: 60px auto;
  line-height: 2;
`;

export const NotVenueDiv = styled.div`
  width: 100%;
  height: 1000px;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 76px;
  right: 0px;
`;

export const NotVenueBtn = styled.button`
  padding: 10px 30px;
  border-radius: 0;
  border: 1px solid #ffbd3d;
  background-color: #ffbd3d;
  margin: auto;
  &:hover {
    cursor: pointer;
    background-color: #ffcb65;
    border: 1px solid #ffcb65;
  }
`;

export const StyledLink = styled(Link)`
  color: #c3752d;
`;
