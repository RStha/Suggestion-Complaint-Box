var express = require('express');
var router = express.Router();
var schema = require('../schema')

router.post('/login', function(req, res, next) {
    res.send('respond with a resource');
  });

module.exports = router;