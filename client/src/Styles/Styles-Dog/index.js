import styled from "styled-components";

export const Container = styled.div`
width: 200px;
height: 350px;
display: flex;
flex-direction: column;
padding: 10px;
align-items: center;
border-radius: 20px;
margin: 15px;
background-color: rgba(0, 0, 0, 0.15);
box-shadow: 1px 1px 10px 6px black;

`;

export const Img = styled.img`
max-width: 15vw;
max-height: 13vh;
border-radius: 15px;
border: 1px solid white;
`;

export const Name = styled.h3`
font-size: 21px;
color: white;
`;

export const Temperament = styled.p`
font-size: 13px;
color: white;
margin-bottom: 20pt;
`;

export const Weight = styled.p`
font-size: 12px;
color: white;
margin: 0px;
`;