const express = require("express");

var router = express.Router();

const { getDishes,getHealth, postDish } = require("../controllers/dishesControllers");

router.all('/', getHealth);

router.get('/dishes', getDishes);

router.post("/dish", postDish);

module.exports = router;