import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerForm = styled.div`
width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.90);
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
  padding:15px;
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
  letter-spacing: 1px;
  text-shadow: 5px 5px 20px white;
  margin-bottom: 5px;
`;

export const Img = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 30px;
  box-shadow: 1px 1px 20px 2px white;
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

export const DeleteButton = styled.button`
  margin: 5px;
  background-color: #3ee5bd;
  border-radius: 30px;
  border: 0px;
  color: black;
`;

export const Input = styled.input`
border: 0px solid black;
color: black;
background-color: white;
`
export const Error = styled.p`
font-size: 12px;
color: red;

${Input}{
border: 1px solid red;
color: red;
background-color: red;
}
`;
