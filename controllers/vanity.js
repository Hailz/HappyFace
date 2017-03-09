var express = require('express');
var router = express.Router();
var request = require('request');
var db = require('../models');
var app =express();

router.get('/result', function(req, res){
  
});

router.post('/', function(req, res){
  console.log(req.user.id);
  db.product.create({
    userId: req.user.id,
    name: req.body.name,
    productType: req.body.productType,
    imageLink: req.body.imageLink,
    productLink: req.body.productLink
  })
  .then(function(product){
    res.render('/')
  })
  .catch(function(error){
    res.status(400).send('Whoops');
  });
});

//export
module.exports = router;
