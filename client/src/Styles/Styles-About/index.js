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
  background-color: rgba(0, 0, 0, 0.9);
  box-shadow: 1px 1px 20px 10px black;
  border-radius: 30px;
  border: 2px solid black;
  padding: 25px;
  margin-top: 30px;
`;

export const ContainerTech = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerLabel = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-right: 15%;
  color: white;
`;

export const Li = styled.li`
  font-size: 10px;
  color: white;
  letter-spacing: 5px;
  text-shadow: 5px 5px 20px white;
  margin-bottom: 8px;
`;

export const ContainerImg = styled.div`
  width: 100%;
  align-items: center;
  margin-right: 50px;
`;

export const H1 = styled.h1`
  font-size: 30px;
  color: white;
  letter-spacing: 5px;
  text-shadow: 5px 5px 20px white;
`;

export const Img = styled.img`
  width: 290px;
  height: 250px;
  border-radius: 30px;
  margin-right: 30px;
  margin-top: 30px;
  box-shadow: 1px 1px 15px black;
`;

export const H3 = styled.h3`
  font-size:12px;
  color: white;
  letter-spacing: 1px;
  text-shadow: 1px 1px 10px white;
  margin-bottom: 35px;
`;
