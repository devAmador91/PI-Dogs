import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../Styles/Styles-Filter";
import { BackGround } from "../Styles/Styles-Filter";
import Dog from "./Dog";

const Filter = () => {
  const filter = useSelector((state) => state.filter);
  console.log(filter);

  return (
    <React.Fragment>
      <Container>
        <BackGround>
          {filter.length &&
            filter.map((dog,i) => (
              <Dog
                key={i}
                id={dog.id}
                image={dog.img}
                name={dog.name}
                temperament={dog.temperament}
                weight={dog.weight}
              />
            ))}
        </BackGround>
      </Container>
    </React.Fragment>
  );
};

export default Filter;
