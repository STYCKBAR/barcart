const User = require("../models/userModel");
const res = require("express/lib/response");
const cookieController = {};

//setSSIDCookie - store the user id in a cookie
cookieController.setSSIDCookie = async (req, res, next) => {
  const { username, password } = req.body;
  // query our database to see what the user_id is on our users table
  try {
    const dbUserID = await User.query(
      `SELECT user_id FROM users WHERE username = '${username}'`
    );
    // give the userID back to the front end
    res.locals.userID = dbUserID.rows[0].user_id;
 
    // set the cookie on the response object
    res.cookie("ssid", dbUserID.rows[0].user_id, { httpOnly: true });

//  add to our database thru a database query
    await User.query(
      `INSERT INTO sessions(cookie_id, user_id, created_at) VALUES( ${dbUserID.rows[0].user_id}, ${dbUserID.rows[0].user_id}, now())`);
    next();

    // if everything fails, then a catch block
  } catch (err) {
    console.log(err);
    return next({
      log: "An error occured in COOKIE CONTROLLER - user_id query",
    });
  }
}

//   catch (err) {
//     console.log(err);
//     return next({
//       log: "An error occured in the CONTROLLER - set sessions table query",
//     });
//   }
//   // move onto the next middleware;
//   return next();
// };

module.exports = cookieController;
