const formatTemperament = (arrDogs) => {
  newTemperament = new Set();

  arrDogs.map((dog) => {
    ` ${dog.temperament}`
      .split(",")
      .forEach((temperament) =>
        newTemperament.add(temperament.replace(/ /g, ""))
      );
  });

  return Array.from(newTemperament).map((t) => {
    return { name: t };
  });
};

module.exports = formatTemperament;
