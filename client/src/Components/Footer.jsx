import React from "react";
import { FooterContainer, Img } from "../Styles/Styles-Footer";
import imgDog from "../Styles/Img/Img-Landing-Page/fingerPrint.png"

const Footer = ()=>{
return(
    <FooterContainer>
        <Img src={imgDog}/>
    </FooterContainer>
)
}

export default Footer;