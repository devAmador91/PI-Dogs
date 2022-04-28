import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ContainerAll = styled.div`
  width: 100%;
  height: 115px;
  display: flex;
  flex-direction: column;
  background-color: black;
  padding-top: 10px;
  border-radius: 0px 0px 30px 30px;
`;

export const ContainerLogoSearchBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 15px;
`;

export const ContainerLogoTitle = styled.div`
  display: flex;
`;

export const ContainerSearchBar = styled.div`

`;

export const Img = styled.img`
  width: 55px;
  height: 58px;
  margin-right: 10%;
`;

export const H1 = styled.h1`
  font-size: 25px;
  letter-spacing: 5px;
  color: white;
  text-shadow: 1px 5px 12px white;
`;

export const ContainerOptions = styled.div`
display: flex;
justify-content: space-around;
`;

export const ContainerUl = styled.ul`
width: 0%;
height: 30px;
display: flex;
justify-content: center;
margin: 0px;
padding: 0px;
background-color: red;

&:hover{
    transition: all 0.3s;
}
`; 

export const Ul = styled.ul`
transition: all 0.3s;
position: absolute;
top: 30px;
width: 100%;

`;

export const Link = styled(NavLink)`
text-decoration: none;
color: white;
font-size: 17px;
`;


export const List = styled.button`
position: relative;
background-color: black;
border: 0px;
&:hover ${Link}{
    color: #4cd6c3;
}

&:hover ${Ul}{
    opacity: 1;
    visibility: visible;
    z-index: 1001;
}
`;

export const Li = styled.li`
display: flex;
flex-direction: column;

width: 100%;
padding: 10px;
color: white;
letter-spacing: 2px;
background-color: rgba(0,0,0,0.6);
&:last-child{
    border-radius: 0px 0px 50px 50px;
}

&:hover{
    cursor: pointer;
    background-color: rgba(245, 243, 39, 0.69);
    color: black;
    letter-spacing: 2px;
}
`

