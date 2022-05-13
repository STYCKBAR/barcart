// const db = require('../models/drinkModel');
const User = require('../models/userModel');

const drinksController = {};

drinksController.getDrinks = async (req, res, next) => {
  try {
    const dbRecipes = await User.query(`SELECT * FROM recipes`);
    console.log(dbRecipes.rows); // req.query
    res.locals.recipes = dbRecipes.rows;
  } catch (err) {
    console.log(err);
    return next({
      log: 'An error occured in the DRINKS CONTROLLER - get all recipes query',
    });
  }
};



drinksController.getIng = async (req, res, next) => {
  const { drink, userID } = req.body;
  console.log(drink)
  try {
// text: 'SELECT * FROM planets where _id=' + req.query.id + ';',
    const recIngQuery = {
      text: `SELECT i.ingredient_name FROM recipe_ing r INNER JOIN recipes rc on r.recipe_id = rc.recipe_id INNER JOIN ingredients i on r.ing_id = i.id WHERE rc.recipe_name = '${drink}' `
  };
    // first we need to find the recipe that the user wants to make in our databse. 
    const recipeIngResult = await User.query(recIngQuery);
    console.log(recipeIngResult.rows)
    res.locals.recipeIng = recipeIngResult.rows;
    // then we need to search the db for all the ingredients that the user will need, tack that onto the res.locals for the front end
    // const dbRecipesResult = await User.query(`SELECT ing_id FROM recipe_ing WHERE recipe_id = ${recipeID}`);

    const userIngQuery = {
      text: `SELECT i.ingredient_name FROM recipe_ing r inner join user_stock u on r.ing_id = u.ingredient_id inner join ingredients i on r.ing_id = i.id inner join recipes rc on rc.recipe_id = r.recipe_id WHERE rc.recipe_name = '${drink}' and u.user_id = ${userID}`
    };
    
    const userIngResult = await User.query(userIngQuery);
    res.locals.userIng = userIngResult.rows;

//     SELECT r.recipe_id, rc.recipe_name, r.ing_id, i.ingredient_name
// FROM recipe_ing r inner join user_stock u on r.ing_id = u.ingredient_id inner join ingredients i on r.ing_id = i.id inner join recipes rc on rc.recipe_id = r.recipe_id
// WHERE rc.recipe_name = ‘Margarita’ and u.user_id = 1
    
    // res.locals.userIng = 
  } catch (err) {
    console.log(err);
    return next({
      log: 'An error occured in the DRINKS CONTROLLER - get ingredients query',
    });
  }
};

    // query the database for the ingredients_in_drinks table with columns added for "ingredient" name, "in_stock" amount and for "drink" name
  // User.query(queryStr)
  // .then((data) => {
    
    // data.rows is an array of objects; each object corresponds to a single drink/ingredient combo and includes the amount necessary to make the drink AND how much of that ingredient the user has in their inventory
//     let results = data.rows;
//     let possible = {};

//     // iterate over ingredients for each drink, comparing "in_stock" to "quantity" needed for that drink
//     for (let el of results) {
//       // calculate how many drinks the user can make given their inventory of the current ingredient
//       let numDrinks = Math.floor(el.in_stock / el.quantity);
//       let drinkName = el.drink;
      
//       // if drink already exists, update numDrinks only if current ingredient it is the "limiting factor"
//       if (possible.hasOwnProperty(drinkName)) { 
//         if (numDrinks < possible[drinkName]) {
//           possible[drinkName] = numDrinks;
//         }
//       }
//       // add drink to possible object if it does not currenly exist 
//       else {
//         possible[drinkName] = numDrinks;
//       }
//     }

//     res.locals.drinks = possible;
//     return next();

//   })
//   .catch(error => next({
//     log: 'drinksController.getDrinks ERROR',
//     message: {err: 'drinksController.getDrinks ERROR'}
//   }));

// };


module.exports = drinksController;