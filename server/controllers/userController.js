// const bcrypt = require('bcryptjs/dist/bcrypt');
const res = require("express/lib/response");
// const db = require('../models/userModel');
const User = require("../models/userModel");
const userController = {};

//  declare const bcrypt
const bcrypt = require("bcrypt");
//  declare salt set to 10
const saltRounds = 10;



// createUser (creating account)
userController.createUser = (req, res, next) => {
  //write code here
  userController.createUser(
    {
      username: req.body.username,
      password: data,
    },
    function (error, user) {
      if (error) {
        // res.render('./../client/signup', {error: 'hello!'});
        {
        }
      }
    }
  );
};

//  verifyUser (login attempt)
userController.verifyUser = async (req, res, next) => {
  // if we don't have the info we need, error
  console.log("username", req.body);
  const { username, password } = req.body;
  if (!username || !password) {
    res.redirect("/signup");
    return next("Missing username or password in userController.verifyUser");
  }
  // database query to see if username exists in our users db table
  try {
    //dbPassword is what is pulled out of our users table hashed_password. It checks to see if username is valid then it kicks back the hashed password.
    const results = await User.query(
      `SELECT password FROM users WHERE username = '${username}'`
    );
    const dbPassword= results.rows[0].password
    console.log('dbPassword inside of try/catch block ', dbPassword) // { password: 'shelbypassword' }
    // console.log(dbPassword.password)
    bcrypt
    .compare(password, dbPassword)
    .then((result) => {
      if (!result) {
        // make sure the front end has a route called /signup (or that it matches)
        res.redirect("/signup");
        return next();
      } else {
        res.locals.verified = result;
        console.log("result in userController.verifyUser ", result);
        return next();
      }
    })
  } catch (err) {
    console.log(err);
    return next({
      log: "An error occured in the CONTROLLER - Verify User Query",
    });
  }
  // bcrypt
  //   .compare(password, dbPassword)
  //   .then((result) => {
  //     if (!result) {
  //       // make sure the front end has a route called /signup (or that it matches)
  //       res.redirect("/signup");
  //     } else {
  //       res.locals.verified = result;
  //       console.log("result in userController.verifyUser ", result);
  //       return next();
  //     }
  //   })
  //   .catch((err) => {
  //     return next("error in userController.verifyUser: " + JSON.stringify(err));
  //   });
};

module.exports = userController;
// bcrypt.genSalt(saltRounds, function(err, salt) {
//   bcrypt.hash(password, salt, function(err, hash) {
//   // Store hash in database here
//   });
// });

