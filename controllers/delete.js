var express = require('express');
var router = express.Router();
var request = require('request');
var db = require('../models');
var app =express();

router.post('/', function(req, res){
  console.log("************************************************************" + req.body.id + " should be 13 or 5");
  db.product.destroy({
    where: {
      id: req.body.id
    }
  }).then(function(product){
    res.redirect('/vanity');
  });
});

  
//export
module.exports = router;