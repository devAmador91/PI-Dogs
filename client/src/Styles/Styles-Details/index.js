import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackGround = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 1px 1px 25px 5px black;
  border-radius: 30px;
  margin-bottom: 20px;

  padding: 20px;
`;

export const H1 = styled.h1`
  font-size: 30px;
`;

export const Img = styled.img`
  width: 600px;
  border-radius: 30px;
`;

export const P = styled.p`
  font-size: 20px;
`;
