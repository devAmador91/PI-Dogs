import styled from "styled-components";
import background from "../Img/Img-Landing-Page/Landing.jpg";
import fingerPrint from "../Img/Img-Landing-Page/fingerPrint.png";
import { NavLink } from "react-router-dom";

export const BackGround = styled.div`
  background-image: url(${background});
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: #2283aa;
  padding-left: 15%;
`;

export const Container = styled.div`
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  background-color: rgba(225, 218, 212, 0.3);
  align-items: center;
  position: fixed;
  border-radius: 50px;
`;

export const H1 = styled.h1`
  letter-spacing: 5px;
  color: white;
  text-shadow: 1px 5px 15px white;
`;

export const FingerPrint = styled(NavLink)`
  background-image: url(${fingerPrint});
  display: flex;
  align-items: center;
  justify-content: center;
  width: 89px;
  height: 105px;
  background-size: cover;
  margin-bottom: 10px;

  &:hover{
    transform: scale(1.3);
  }
`;

export const P = styled.p`
  text-decoration: none;
  color: white;
`;
