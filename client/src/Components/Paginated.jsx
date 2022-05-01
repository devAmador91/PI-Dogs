import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContainerPaginated } from "../Styles/Styles-Paginated";
import { Button } from "../Styles/Styles-Paginated";
import { paginated } from "../Actions";

const Paginated = () => {
  const dogs = useSelector((state) => state.allDogs);
  const dispatch = useDispatch();

  const handlePaginated = (e) => {
    dispatch(paginated(e.target.value));
  };

  return (
    <ContainerPaginated>
      {dogs.map((page, index) => (
        <Button key={index} value={index} onClick={(e) => handlePaginated(e)}>
          {index + 1}
        </Button>
      ))}
    </ContainerPaginated>
  );
};

export default Paginated;
