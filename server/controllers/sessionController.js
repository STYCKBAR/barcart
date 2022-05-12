// unit connects to their mongoose model db?
// const User = require('../models/userModel');
// const Session = require('../models/sessionModel');
// const mongoose = require('mongoose');

const sessionController = {};

// LoggedIn - find the appropriate session for this request in the database, then
//  verify whether or not the session is still valid.
sessionController.isLoggedIn = (req, res, next) => {
  //write code here

};


// startSession - create and save a new Session into the database.
sessionController.startSession = (req, res, next) => {
  //write code here

};




module.exports = sessionController;
