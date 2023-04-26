import styled from "styled-components";

export const HeroDiv = styled.div``;

export const ImgHero = styled.img`
  width: 100%;
  height: 650px;
  object-fit: cover;
  filter: brightness(40%);
`;

export const H1Hero = styled.h1`
  color: #ffdc97;
  font-size: 3rem;
`;

export const PHero = styled.p`
  color: #ebebeb;
  font-size: 1.5rem;
  width: 290px;
  line-height: 2.3rem;
  margin: auto auto 30px auto;
`;

export const HeroInfo = styled.div`
  position: absolute;
  top: 160px;
  right: 50%;
  translate: 50%;
  text-align: center;
`;

export const ButtonHeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`;

export const RentOutButton = styled.button`
  border: 1px solid #ffcb65;
  padding: 15px 50px;
  background-color: transparent;
  color: #ebebeb;
  &:hover {
    background-color: #ffcb65;
    color: black;
    cursor: pointer;
  }
  &:active {
    background-color: transparent;
    color: #ededed;
    cursor: pointer;
  }
`;

export const RentVenueButton = styled.button`
  border: 1px solid #ffcb65;
  background-color: #ffcb65;
  padding: 15px 50px;
  &:hover {
    background-color: transparent;
    color: #ededed;
    cursor: pointer;
  }
  &:active {
    background-color: #ffcb65;
    color: black;
    cursor: pointer;
  }
`;
