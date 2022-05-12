import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerImg = styled.div`
  width: 60%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  align-items: center;
  border-radius: 20px;
  margin: 15px;
  margin-top: 80px;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 1px 1px 10px 6px black;
  padding: 20px;
`;

export const Img = styled.img`
  max-width: 32vw;
  max-height: 32vh;
  border-radius: 15px;
  border: 1px solid white;
  margin-bottom: 30px;
  box-shadow: 1px 1px 10px 6px white;
`;

export const H1 = styled.h1`
  font-size: 30px;
  color: white;
  letter-spacing: 5px;
  text-shadow: 5px 5px 20px white;
  margin-bottom: 35px;
`;
