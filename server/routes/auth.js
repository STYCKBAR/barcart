const express = require('express');
const router = express.Router();
// const { User } = require('../controllers/userController')

// connecting to user, session, cookie controller
const userController = require('../controllers/userController');
const sessionController = require('../controllers/sessionController');
const cookieController = require('../controllers/cookieController');

// Sign Up - user can post username and password on the login page and hit create and send a post request to our server. 
router.post('/signup', userController.createUser,
  cookieController.setSSIDCookie,
  sessionController.startSession, (req, res) => {
    // WHAT DO WE WANT TO DO HERE?
  }
);

// Login
router.post('/login',
  userController.verifyUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    { verifed: true }
    // req.body.username = 'shelbylovespuppies'
    // req.body.password = password
  // WHAT DO WE WANT TO DO HERE?
  }
);

router.post('/login/create', (req, res, next) => {

  bcrypt.hash(req.body.password, saltRounds, (error, hash) => {
  
    User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      password: hash
    })
    .then(user => res.status(201).send(user))
    .catch(error => next(error))
    
  })
  
})

module.exports = router