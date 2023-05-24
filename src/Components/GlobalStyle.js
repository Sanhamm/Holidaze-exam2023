import styled from "styled-components";

export const Loader = styled.img`
  margin: 80px auto;
  text-align: center;
  padding-top: 60px;
`;

export const LoaderDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const H1Loader = styled.h1`
  color: #ffbd3d;
  text-align: center;
  margin-bottom: 190px;
`;

export const InputDefault = styled.input`
  padding: 18px;
  border: none;
  width: 100%;
  margin: 20px 0px;
  &:focus {
    outline: 2px solid #c3752d;
  }
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

export const VenuButton = styled.button`
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

export const InputDiv = styled.div`
  margin: 80px auto 150px auto;
  width: 300px;
  margin: auto;
`;

export const LogoVenue = styled.img`
  display: block;
  margin: 80px auto;
`;

export const H1Venue = styled.h1`
  color: #ffbd3d;
  font-size: 1.9rem;
  text-align: center;
`;
export const ErrorMsg = styled.span`
  color: #ffbd3d;
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
