const router = require('express').Router()
const dogRoute = require('./dog.js');
const temperamentRoute = require('./temperament.js');

router.use(dogRoute);
router.use(temperamentRoute);

module.exports = router;
