// const bcrypt = require('bcryptjs/dist/bcrypt');
const res = require("express/lib/response");
// const db = require('../models/userModel');
const User = require("../models/userModel");
const userController = {};

//  declare const bcrypt
const bcrypt = require("bcrypt");
//  declare salt set to 10
const saltRounds = 5;

// createUser (creating account)
userController.createUser = async (req, res, next) => {
  const { username, password } = req.body;
  // if missing information don't progress
  if (!username || !password) {
    res.redirect("/signup");
    return next("Missing username or password in userController.verifyUser");
  }

  try {
    // make our new user a hashed password
    const hashedPW = await bcrypt.hash(password, saltRounds);
    // console.log('hashed PW', hashedPW);
    // put our new user and their password into the databse
    await User.query(
      `INSERT INTO users(username, password) VALUES( '${username}', '${hashedPW}')`
    );
    // move onto next middleware
    next();
  } catch (err) {
    console.log(err);
    return next({
      log: "An error occured in the CONTROLLER - Verify User Query",
    });
  }
};

//  verifyUser (login attempt)
userController.verifyUser = async (req, res, next) => {
  // if we don't have the info we need, error
  // console.log("username", req.body);
  const { username, password } = req.body;
  if (!username || !password) {
    res.redirect("/signup");
    return next("Missing username or password in userController.verifyUser");
  }
  // database query to see if username exists in our users db table
  try {
    //dbPassword is what is pulled out of our users table password, it is the hashed password.
    const results = await User.query(
      `SELECT password FROM users WHERE username = '${username}'`
    );
    const dbPassword = results.rows[0].password;
    console.log('dbPassword  ', dbPassword)
    console.log('input password   ', password)
    // pass the password the user put in at login thru the hash function
    const inputPassword = await bcrypt.hash(password, saltRounds);

    console.log('inputPassword postHash   ', inputPassword);

    bcrypt.compare(password, dbPassword).then((result) => {
      if (!result) {
        // make sure the front end has a route called /signup (or that it matches)
        console.log(
          "Password verification failed in userController.verifyUser"
        );
        res.redirect("/signup");
      } else {
        res.locals.verified = result;
        console.log("result in userController.verifyUser ", result);
        return next();
      }
    });
  } catch (err) {
    console.log(err);
    return next({
      log: "An error occured in the CONTROLLER - Verify User Query",
    });
  }
};

module.exports = userController;
