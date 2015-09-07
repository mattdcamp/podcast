var express = require('express');

var User = require('../models/User');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var u, user,
        isLoggedIn = !!req.user;
    if(isLoggedIn) {
        u = req.user[0];
        user = {
            email: u.emails[0],
            first_name: u.first_name,
            last_name: u.last_name,
            photo: u.photos[0]
        };
    }
    user.isLoggedIn = isLoggedIn;
    res.json(user);
});

module.exports = router;
