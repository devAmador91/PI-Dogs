import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContainerPaginated, Button } from "../Styles/Styles-Paginated";
import { paginated } from "../Actions";
import structurePaginated from "./structurePaginated";

const PaginatedHome = () => {
  const allDogs = useSelector((state) => state.allDogs);
  const dogs = structurePaginated(allDogs);
  const dispatch = useDispatch();

  const handlePaginated = (e) => {
    document.body.scrollIntoView();
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

export default PaginatedHome;
