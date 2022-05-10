import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cleanFilter } from "../Actions";
import { Container, ContainerImg } from "../Styles/Styles-NotFound";
import { Img } from "../Styles/Styles-NotFound";
import { H1 } from "../Styles/Styles-NotFound";
import notFoundImg from "../Styles/Img/NotFoundImg/dogNotFound.png";

export const NotFound = ({ error }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cleanFilter());
  });
  return (
    <Container>
      <ContainerImg>
        <H1>Not Found</H1>
        <Img src={notFoundImg} />
      </ContainerImg>
    </Container>
  );
};
