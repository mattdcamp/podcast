var express = require('express');
var router = express.Router();

var webHost = 'http://localhost:9000';
router.get('/web', function(req, res, next) {
    var path = req.query.path;

    if(!path) {
        path = "/";
    }

    res.redirect(302, webHost + path);
});

router.get('/home', function(req, res, next) {
    res.redirect(webHost + '/');
});

module.exports = router;