import { FilterOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const SearchBar = styled.input`
  border-radius: none;
  width: 43px;
  color: white;
  padding: 10px;
  background-color: transparent;
  border: 1px solid #ededed;
  transition: width 1.5s;

  &:focus {
    outline: 1.5px solid #c3752d;
    width: 33%;
    border: 1px solid #c3752d;
    background-color: white;
    color: black;
  }
`;

export const FilterIkon = styled(FilterOutlined)`
  color: #ededed;
  float: right;
  font-size: 1.5rem;
  border: 1px solid #ededed;
  padding: 5px 10px;
  &:hover {
    color: #b0b0b0;
    border: 1px solid #b0b0b0;
  }
`;

export const FilterGridDiv = styled.div`
  max-width: 1060px;
  margin: 40px auto;
  position: relative;

  @media (max-width: 1060px) {
    margin: 40px;
  }
`;

export const FilterBackgroundDiv = styled.div`
  background-color: rgb(41, 41, 41);
  display: grid;
  position: absolute;
  right: 0px;
  z-index: 1;
  width: 150px;
  height: 90px;
  padding: 10px 0px;
`;

export const FilterBtn = styled.button`
  padding: 5px;
  background-color: transparent;
  color: #ededed;
  border: none;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const FilterTag = styled.p`
  position: absolute;
  color: white;
  right: 60px;
  top: -7px;
  &:hover {
    cursor: pointer;
  }
`;
