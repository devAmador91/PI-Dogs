import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 1px 1px 20px 10px black;
  border-radius: 30px;
  border: 2px solid black;
  padding: 15px;
  margin-top: 30px;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-right: 15%;
  color: white;
`;

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
`;
export const H1 = styled.h1`
  font-size: 30px;
  color: white;
  letter-spacing: 5px;
  text-shadow: 5px 5px 20px white;
`;

export const Label = styled.label`
  font-size: 15px;
  color: white;
`;

export const Img = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 30px;
`;

export const Button = styled.button`
  width: 50px;
  color: white;
  border: 0px;
  border-radius: 30px;
  padding: 5px;
  margin-top: 40px;
  background-color: black;
  box-shadow: 1px 1px 20px 10px black;
  cursor: pointer;
`;
