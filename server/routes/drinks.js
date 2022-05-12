const express = require('express');
const router = express.Router();

// connecting to drinks Controller
const drinksController = require('../controllers/drinksController');

// router path, drinksController middleware, right now giving everything from *just* the recipes table in our db
router.get('/', drinksController.getDrinks, (req, res) => res.status(200).json(res.locals.recipes));


module.exports = router;