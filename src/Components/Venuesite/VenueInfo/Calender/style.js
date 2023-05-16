import { DatePicker } from "antd";
import styled from "styled-components";

export const CalenderDiv = styled.div`
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const HeadingDate = styled.p`
  color: white;
`;

export const NumberGuests = styled.input`
  padding: 15px;
  border: none;
  width: 94%;
  margin: 10px 0px;
  &:focus {
    outline: 2px solid #c3752d;
  }
  @media (max-width: 800px) {
    width: 95.5%;
  }
  @media (max-width: 400px) {
    width: 90.5%;
  }
`;
