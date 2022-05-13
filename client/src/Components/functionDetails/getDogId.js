import { urlLocal } from "../../Actions";
import { urlBack } from "../../Actions";

export const getDogId = async (id, setDog) => {
    const response = await fetch(`${urlLocal || urlBack}dogs/${id}`);
    const dogJson = await response.json();
    setDog(dogJson);
  };