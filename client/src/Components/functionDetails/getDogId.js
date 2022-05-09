

export const getDogId = async (id, setDog) => {
    const response = await fetch(`http://localhost:3001/dogs/${id}`);
    const dogJson = await response.json();
    setDog(dogJson);
  };