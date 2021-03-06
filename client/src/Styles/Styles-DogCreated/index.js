import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerData = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.90);
  box-shadow: 1px 1px 20px 10px black;
  border-radius: 30px;
  border: 2px solid black;
  padding: 25px;
  margin-top: 30px;
`;

export const ContainerForm = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerLabel = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-right: 15%;
  color: white;
`;

export const ContainerImg = styled.div`
  align-items: center;
  margin-right: 50px;
`;

export const H1 = styled.h1`
  font-size: 30px;
  color: white;
  letter-spacing: 5px;
  text-shadow: 5px 5px 20px white;
  margin-bottom: 0fr;
`;

export const Label = styled.label`
  font-size: 18px;
  color: white;
  letter-spacing: 1px;
  text-shadow: 5px 5px 20px white;
`;

export const Img = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 30px;
  box-shadow: 1px 1px 20px 5px white;
`;

export const P = styled.p`
  font-size: 14px;
`;

export const Button = styled.button`
  width: 60px;
  color: white;
  border-radius: 20px;
  padding: 5px;
  margin-top: 40px;
  background-color: black;
  box-shadow: 1px 1px 20px 10px black;
  cursor: pointer;
  &:hover{
    background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
    border: 2px solid #72afd3;
    color: black;
  }
`;
