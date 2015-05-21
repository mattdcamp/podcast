var express = require('express');
var mongoose = require('mongoose');

var User = require('../models/User');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    User.find(function(err, users) {
        if(err) {return next(err);}
        res.json(users);
    });
});

module.exports = router;
