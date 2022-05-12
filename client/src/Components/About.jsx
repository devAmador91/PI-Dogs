import React from "react";
import { Container, ContainerData, ContainerTech, ContainerLabel, ContainerImg, H1, Li, Img, H3 } from "../Styles/Styles-About";
import imgDev from "../Styles/Img/AboutMe/dev.jpg";

const About = () => {
  return (
    <React.Fragment>
      <Container>
        <ContainerData>
          <H1>About</H1>
          <ContainerTech>
            <ContainerLabel>
              <H3>Implemented technologies:</H3>
             <Li>Html</Li>
             <Li>Css</Li>
             <Li>JavaScript</Li>
             <Li>React</Li>
             <Li>Redux</Li>
             <Li>NodeJs</Li>
             <Li>Express Js</Li>
             <Li>Sequelize</Li>
            </ContainerLabel>

            <ContainerImg>
              <Img src={imgDev}></Img>
            </ContainerImg>
          </ContainerTech>
        </ContainerData>
      </Container>
    </React.Fragment>
  );
};

export default About;
