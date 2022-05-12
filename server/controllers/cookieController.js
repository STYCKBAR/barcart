const cookieController = {};

// //setCookie - set a cookie with a random number
// cookieController.setCookie = (req, res, next) => {
// 	res.cookie('code', 'hi');
// 	res.cookie('secret', Math.floor(Math.random() * 100))
// }

//setSSIDCookie - store the user id in a cookie
cookieController.setSSIDCookie = (req, res, next) => {
    res.cookie('ssid', res.locals, user._id.id, { httpOnly: true })
    return next()
};

module.exports = cookieController;
