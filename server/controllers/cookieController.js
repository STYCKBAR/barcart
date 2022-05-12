const User = require('../models/userModel');

const cookieController = {};
const { username, password } = req.body;

//setSSIDCookie - store the user id in a cookie
cookieController.setSSIDCookie = async (req, res, next) => {

    // query our database to see what the user_id is on our users table
    try {
		const dbUserID = await User.query('SELECT user_id FROM users WHERE username = $1, [username]');
	} catch (err) {
    console.log(err);
    return next({
      log: 'An error occured in COOKIE CONTROLLER - user_id query',
    });
  }

    // set the cookie on the response object
    res.cookie('ssid', dbUserID, { httpOnly: true })

    // then add to our database thru a database query
   try {
	    await User.query(`INSERT INTO sessions(cookie_id, user_id, created_at) VALUES($1, $2, $3), ['ssid'${dbUserID}, ${dbUserID}, GETDATE()]`);
	} catch (err) {
    console.log(err);
    return next({
      log: 'An error occured in the CONTROLLER - set sessions table query',
    });
  }
 
  // move onto the next middleware;
    return next()
};

module.exports = cookieController;
