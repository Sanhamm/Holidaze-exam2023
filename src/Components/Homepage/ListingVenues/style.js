import { Card } from "antd";
import styled from "styled-components";

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
`;

export const CardStyle = styled(Card)`
  margin: 20px;
  border-radius: 0%;
  background-color: #363636;
  border: 2px solid #363636;
  box-shadow: 20px;
`;

export const ImgCard = styled.img`
  border: 0.1px solid #a17d36;
`;
