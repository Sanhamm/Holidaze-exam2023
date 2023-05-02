import { Link } from "react-router-dom";
import styled from "styled-components";

export const H1VenueInfo = styled.h1`
  text-align: center;
  color: #ffcb65;
  margin-top: 50px;
  font-size: 2.3rem;
`;

export const PVenueInfo = styled.p`
  color: white;
  max-width: 1060px;
  line-height: 1.5rem;
  margin: 70px auto;
  font-size: 1.2rem;
`;

export const FlexDiv = styled.div`
  display: flex;
  max-width: 1060px;
  margin: auto;
`;

export const ProfileAvatar = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 100%;
  border: 1px solid #ffcb65;
`;

export const PAvatar = styled(Link)`
  color: #ffcb65;
  margin-left: 20px;
  text-decoration: none;
  margin-top: 15px;
`;

export const GridProfileDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1060px;
  margin: 20px auto 90px auto;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const GuestSpanProfile = styled.span`
  color: #ffcb65;
`;
export const GuestPTag = styled.p`
  color: #f3f3f3;
  padding: 10px 0px;
`;
export const DivExtraInfo = styled.div`
  max-width: 1060px;
  margin: auto;
`;

export const DivAllInfo = styled.div`
  @media (max-width: 1060px) {
    margin: 20px;
  }
  @media (max-width: 800px) {
    margin: 40px;
  }
`;