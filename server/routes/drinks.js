const express = require('express');
const router = express.Router();

// connecting to drinks Controller
const drinksController = require('../controllers/drinksController');

// router path, drinksController middleware, still not anything on the res.locals object
router.get('/', drinksController.getDrinks, (req, res) => res.status(200).json(res.locals));


module.exports = router;