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
    res.locals.userID = dbUserID.rows[0].user_id;
    console.log("messy object", dbUserID.rows[0].user_id);
    console.log('ssid', dbUserID.rows[0].user_id) //ssid1
    // set the cookie on the response object
    res.cookie("ssid", dbUserID.rows[0].user_id, { httpOnly: true });

    await User.query(
      `INSERT INTO sessions(cookie_id, user_id, created_at) VALUES('ssid' + ${dbUserID.rows[0].user_id}', ${dbUserID.rows[0].user_id}, now()`);
    next();
  } catch (err) {
    console.log(err);
    return next({
      log: "An error occured in COOKIE CONTROLLER - user_id query",
    });
  }
}
// then add to our database thru a database query
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
