import { Modal } from "antd";
import styled from "styled-components";
export const AvatarImg = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 100%;
  border: 1px solid #ffcb65;
`;

export const ProfileInfo = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  max-width: 1080px;
  margin: 80px auto;
`;

export const ProfileInfoAvatar = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: auto;
`;
export const EditBtn = styled.button`
  width: 140px;
  height: 45px;
  background-color: #ffcb65;
  border: 1px solid #ffcb65;
  margin-top: 30px;
  justify-content: center;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
export const RentOutBtn = styled.button`
  width: 140px;
  height: 45px;
  color: white;
  background-color: transparent;
  border: 1px solid #ffcb65;
  margin-top: 30px;
  &:hover {
    background-color: #ffcb65;
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const BtnDiv = styled.div`
  margin: auto;
`;

export const InfoDiv = styled.div`
  text-align: center;
`;

export const H1ProfileInfo = styled.h1`
  color: #ffdc97;
  font-size: 2.3rem;
`;
export const PProfileInfo = styled.p`
  color: white;
  font-size: 1.5rem;
  width: 260px;
  margin: auto;
`;

export const ModalStyle = styled(Modal)`
  background: #292929;
  color: #ffcb65;
`;
