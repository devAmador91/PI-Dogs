const router = require("express").Router();
const getDogsBd = require("./functionGetDogs/getDogsBd.js");
const getDogsApi = require("./functionGetDogs/getDogsApi.js");
const joinBdApi = require("./functionGetDogs/joinBdApi.js");
const getDogsBdQuery = require("./functionGetDogs/getDogsBdQuery.js");
const getDogsQuery = require("./functionGetDogs/getDogsQuery.js");
const getDogBdId = require("./functionGetDogs/getDogBdId.js");
const getDogApiId = require("./functionGetDogs/getDogApiId.js");
const validationData = require("./functionsPostDog/validationData.js");
const validationApi = require("./functionsPostDog/validationApi.js");
const create = require("./functionsPostDog/create.js");
const addTemperament = require("./functionsPostDog/addTemperament.js");

router.get("/dogs", async (req, res) => {
  const { nameQuery } = req.query;

  //get all dogs of Bd
  const dogsBd = await getDogsBd(res);
  //no query
  if (!nameQuery) {
    const dogsApi = await getDogsApi(res);

    if (dogsBd.length) {
      const dogsBdApi = joinBdApi(dogsBd, dogsApi);

      return res.json(dogsBdApi);
    }

    return res.json(dogsApi);
  }

  //query in Bd
  if (dogsBd && dogsBd.length) {
    const foundDogBd = getDogsBdQuery(nameQuery, dogsBd);
    if (foundDogBd) {
      return res.json([foundDogBd]);
    }
  }

  //query in Api
  const dogsApi = await getDogsApi(res);
  const foundDogApi = getDogsQuery(nameQuery, dogsApi);

  if (foundDogApi) {
    return res.json(foundDogApi);
  }

  res.status(404).json({ msg: "The dog dont exist", error: 404 });
});

router.get("/dogs/:id", async (req, res) => {
  const { id } = req.params;

  const foundDogBd = await getDogBdId(id);

  if (foundDogBd) {
    return res.json(foundDogBd);
  }

  const foundDogApi = await getDogApiId(id, res);
  res.json(foundDogApi);
});

router.post("/dog", async (req, res) => {
  const { name, height, weight, yearsLife, temperament, img } = req.body;

  validationData(name, height, weight, yearsLife, temperament, img, res);

  const foundDog = await validationApi(name, res);
  if (foundDog) {
    return res
      .status(400)
      .json({ msg: "The dog name already exist in the api", error: 400 });
  }

  const { createDog, isCreate } = await create(
    name,
    height,
    weight,
    yearsLife,
    img
  );

  if (isCreate) {
    await addTemperament(createDog, temperament);
    return res.json({ msg: "The dog was successfully created", createDog });
  }
  res
    .status(400)
    .json({ msg: "The dog name already exists in the database", error: 400 });
});

module.exports = router;
