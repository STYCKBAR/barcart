// const db = require('../models/drinkModel');
const User = require('../models/userModel');
const universeController = {};
//controller to retrieve all drinks by name in "drinks" table
universeController.getDrinks = (req, res, next) => {
  const drinksQuery = `SELECT * FROM drinks`;

  //query database for all drinks by name in "drinks" table 
  User.query(drinksQuery)
    .then((data) => {
      res.locals.drinks = data.rows;
      return next();
    })
    .catch(error => next({
      log: 'universeController.getDrinks ERROR',
      message: { err: 'universeController.getDrinks ERROR' }
    }));
};

//controller to retrieve all ingredients(user inventory) in "ingredients"  table 
universeController.getIngredients = (req, res, next) => {
  const ingredientsQuery = 'SELECT * FROM ingredients';
  //query database for all ingredients (user inventory) in "ingredients"table
  User.query(ingredientsQuery)
    .then((data) => {
      res.locals.ingredients = data.rows;
      return next();
    })
    .catch(error => next({
      log: 'universeController.getIngredients ERROR',
      message: { err: 'universeController.getIngredients ERROR' }
    }));
};


module.exports = universeController;