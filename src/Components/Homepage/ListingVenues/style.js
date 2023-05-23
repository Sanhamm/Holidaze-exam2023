import { Card } from "antd";
import styled from "styled-components";

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  max-width: 1060px;
  margin: auto;
  justify-content: space-between;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, auto);
    justify-content: space-around;
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(1, auto);
  }
`;

export const CardStyle = styled(Card)`
  border-radius: 0%;
  background-color: #363636;
  border: 2px solid #363636;
  box-shadow: 0 8px 6px -6px black;
  max-width: 250px;
  margin: 30px 0px;
  justify-content: space-between;
`;

export const ImgCard = styled.img`
  border: 0.1px solid #a17d36;
  height: 200px;
  object-fit: cover;
`;

export const CardDivPriceButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
`;

export const H1CardStyle = styled.h1`
  color: #ffbd3d;
  font-size: 1.1rem;
`;

export const PCardStyle = styled.p`
  color: #f3f3f3;
  font-size: 0.8rem;
`;

export const PriceCardStyle = styled.p`
  color: #ffbd3d;
  font-size: 0.9rem;
`;

export const ButtonCardStyle = styled.button`
  margin: auto;
  padding: 11px;
  background-color: #ffbd3d;
  border-radius: none;
  border: none;
  &:hover {
    cursor: pointer;
    background-color: #ffcb65;
  }
`;
