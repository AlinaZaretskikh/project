var express = require('express');
var router = express.Router();
var db = require('../bd');

router.get('/', function(req, res, next) {
    db.any('SELECT * FROM products')
    .then(function(data) {
      res.send(data);
    })
    .catch(function(error) {
      console.log(error);
    });
  });

  module.exports = router;