const express = require('express');
const router = express.Router();

// const universeController = require('../controllers/universeController');
// connecting to drinks Controller
const drinksController = require('../controllers/drinksController');

// router.get('/drinks', universeController.getDrinks, (req, res) => {
//   return res.status(200).json(res.locals.drinks);
//   // they are not returning anything on res.locals
// });

// router.get('/ingredients', universeController.getIngredients, (req, res) => {
//   return res.status(200).json(res.locals);
//   // they are not returnign anything on res.locals
// });


// router path for ing
router.get('/', drinksController.getIng, (req, res) => res.status(200).json(res.locals.recipeIng));

module.exports = router;