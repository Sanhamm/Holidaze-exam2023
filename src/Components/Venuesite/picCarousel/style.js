import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const NextDivBtn = styled.div`
  background-color: black;
  opacity: 50%;
  height: 650px;
  width: 80px;
  position: absolute;
  top: 30px;
  z-index: 1;
  right: 0px;
  @media (max-width: 850px) {
    height: 350px;
  }
  @media (max-width: 450px) {
    height: 200px;
    width: 50px;
  }

  &:hover {
    opacity: 80%;
  }
`;

export const PrevDivBtn = styled.div`
  background-color: black;
  opacity: 50%;
  height: 650px;
  width: 80px;
  position: absolute;
  z-index: 1;

  @media (max-width: 850px) {
    height: 350px;
  }
  @media (max-width: 450px) {
    height: 200px;
    width: 50px;
  }
  &:hover {
    opacity: 80%;
  }
`;

export const CarouselPhoto = styled.img`
  width: 100%;
  height: 650px;
  object-fit: cover;
  @media (max-width: 850px) {
    height: 350px;
  }
  @media (max-width: 450px) {
    height: 200px;
  }
`;

export const CarouselDiv = styled.div`
  margin: auto;
  position: relative;
  max-width: 1480px;
  padding-top: 30px;
`;

export const RightArrow = styled(RightOutlined)`
  color: #c3752d;
  position: absolute;
  top: 315px;
  right: 35px;
  font-size: 2rem;
  @media (max-width: 850px) {
    top: 165px;
  }
  @media (max-width: 450px) {
    top: 90px;
    right: 10px;
  }
`;

export const LeftArrow = styled(LeftOutlined)`
  color: #c3752d;
  position: absolute;
  top: 315px;
  left: 35px;
  font-size: 2rem;
  @media (max-width: 850px) {
    top: 165px;
  }
  @media (max-width: 450px) {
    top: 90px;
    left: 10px;
  }
`;
