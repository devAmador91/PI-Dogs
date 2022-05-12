import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
  width: 200px;
  height: 325px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  border-radius: 20px;
  margin: 15px;
  background-color: rgba(9, 44, 52, 0.9);
  box-shadow: 1px 1px 10px 6px black;
`;

export const Img = styled.img`
  max-width: 15vw;
  max-height: 13vh;
  border-radius: 15px;
  border: 2px solid black;
  margin-top: 20px;
`;

export const Name = styled.h3`
  font-size: 16px;
  color: white;
  letter-spacing: 3px;
  text-shadow: 1px 1px 5px white;
  text-align: center;
`;

export const Temperament = styled.p`
  font-size: 13px;
  color: white;
  margin-bottom: 20pt;
  text-align: center;
`;

export const Weight = styled.p`
  font-size: 12px;
  color: white;
  margin: 0px;
`;

export const Link = styled(NavLink)`
    text-decoration: none;
    &:hover{
      transition: 300ms;
        transform: scale(1.1);
        border-radius: 30px;
        ${Container}{
            background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
        }
        ${Name}{
            color: black;
        }
        ${Temperament}{
            color: black;
        }
        ${Weight}{
            color: black;
        }
    }

`;
