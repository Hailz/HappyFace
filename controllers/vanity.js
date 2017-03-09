var express = require('express');
var router = express.Router();
var request = require('request');
var db = require('../models');
var app =express();


router.post('/result', function(req, res){
  console.log(req.body);
  db.product.create({
    userId: req.body.userId,
    name: req.body.name,
    productType: req.body.product_type,
    imageLink: req.body.image_link,
    productLink: req.body.product_link
  })
  .then(function(product){
    res.send('Product added to your vanity!')
  })
  .catch(function(error){
    res.status(400).send('Whoops');
  });
});

//export
module.exports = router;
