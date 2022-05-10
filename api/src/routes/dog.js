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
  const dogsBd = await getDogsBd(res);
  const dogsApi = await getDogsApi(res);

  //no query
  if (!nameQuery) {
    if (dogsBd.length) {
      const dogsBdApi = joinBdApi(dogsBd, dogsApi);
      return res.json(dogsBdApi);
    }
    return res.json(dogsApi);
  }

  //query in Bd
  if (dogsBd.length) {
    const foundDogBd = getDogsBdQuery(nameQuery, dogsBd);
    if (foundDogBd[0] !== undefined) {
      const foundDogApi = getDogsQuery(nameQuery, dogsApi);
      if(foundDogApi){
        const dogsBdApi = joinBdApi(foundDogBd, foundDogApi);
        return res.json(dogsBdApi);
      }
      return res.json(foundDogBd);
    }
  }

  //query in Api
  const foundDogApi = getDogsQuery(nameQuery, dogsApi);
  if (foundDogApi.length) {
    return res.json(foundDogApi);
  }

  //No results
  res.status(404).json({ msg: "The dog dont exist", error: 404 });
});




router.get("/dogs/:id", async (req, res) => {

  const { id } = req.params;

  //dog in Bd
  const foundDogBd = await getDogBdId(id);
  if (foundDogBd) {
    return res.json(foundDogBd);
  }

  //dog in Api
  const foundDogApi = await getDogApiId(id, res);
  res.json(foundDogApi);
});




router.post("/dog", async (req, res) => {

  const { name, height, weight, yearsLife, temperament, img } = req.body;

  //validations
  validationData(name, height, weight, yearsLife, temperament, img, res);

  const foundDog = await validationApi(name, res);
  if (foundDog) {
    return res
      .status(400)
      .json({ msg: "The dog name already exist in the api", error: 400 });
  }

  //Post
  const { createDog, isCreate } = await create( name, height, weight, yearsLife, img );

  //add temperament and join
  if (isCreate) {
    await addTemperament(createDog, temperament);
    const foundDogBd = await getDogBdId(createDog.dataValues.id);
    return res.json({ msg: "The dog was successfully created", foundDogBd });
  }
  res
    .status(400)
    .json({ msg: "The dog name already exists in the database", error: 400 });
});

module.exports = router;
