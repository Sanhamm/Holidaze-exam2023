import { DatePicker } from "antd";
import { Link } from "react-router-dom";
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
    width: 94%;
  }
  @media (max-width: 400px) {
    width: 90%;
  }
`;

export const NotLoggedInDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  width: 120%;
  height: 120%;
  position: absolute;
  top: -30px;
  right: -40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 800px) {
    width: 100%;
    height: 100%;
    top: 0px;
    right: 0px;
  }
`;

export const MainDivCalender = styled.div`
  position: relative;
`;

export const NotLoggedInH1 = styled.h1`
  color: #c3752d;
  text-align: center;
`;

export const NotLoggedInP = styled.p`
  color: white;
  text-align: center;
  line-height: 2;
`;

export const StyledLink = styled(Link)`
  color: #c3752d;
`;
