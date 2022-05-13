const express = require('express');
const router = express.Router();
// const { User } = require('../controllers/userController')

// connecting to user, session, cookie controller
const userController = require('../controllers/userController');
const sessionController = require('../controllers/sessionController');
const cookieController = require('../controllers/cookieController');

// Sign Up - user can post username and password on the login page and hit create and send a post request to our server. 
router.post('/signup', userController.createUser,
  cookieController.setSSIDCookie, (req, res, next) => {res.status(200).json(res.locals.userID)
})



// Login
// sessionController.startSession - put back in if we need this
// we send them back a boolean on the res.locals.verified property and a number on the res.locals.userID property
router.post('/login',
  userController.verifyUser,
  cookieController.setSSIDCookie,
  (req, res) => {
    res.status(200).json(res.locals);
  }
);


module.exports = router