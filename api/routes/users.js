var express = require('express');
var mongoose = require('mongoose');

var User = require('../models/User');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var user = {},
        isLoggedIn = !!req.user;
    if(isLoggedIn) {
        user = req.user[0];
    }
    user.isLoggedIn = isLoggedIn;
    res.json(user);
});

module.exports = router;
