import React from "react";
import { BackGround } from "../Styles/styles-LandingPage";
import { Container } from "../Styles/styles-LandingPage";
import { H1 } from "../Styles/styles-LandingPage";
import { FingerPrint } from "../Styles/styles-LandingPage";
import { P } from "../Styles/styles-LandingPage";

const LandingPage = () => {
  return (
    <BackGround>
      <Container>
        <H1>facedog</H1>
        <FingerPrint to={"/home"}/>
       <P>Start</P>
      </Container>
    </BackGround>
  );
};

export default LandingPage;
