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
`;

export const FilterGridDiv = styled.div`
  max-width: 1060px;
  margin: 40px auto;
  @media (max-width: 1280px) {
    margin: 40px;
  }
`;
