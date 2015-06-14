var express = require('express');
var router = express.Router();

var prefix = "http://localhost:3000/login/";

router.get('/', function (req, res) {
    var output = [];
    output.push({
        name: "Google",
        style: "google",
        url: prefix + "google"
    });

    res.json(output);
});

module.exports = router;