var express = require('express');
var router = express.Router();
var request = require('request');
var db = require('../models');
var app =express();

router.post('/', function(req, res){
  console.log(req.body.productName);
  db.product.findOrCreate({
    where: {
      userId: req.user.id, //adds current user id
      name: req.body.name, //adds name of product
      productType: req.body.productType, //adds product type
      imageLink: req.body.imageLink, //adds image link
      productLink: req.body.productLink //adds product link
    }
  })
  .spread(function(product){
    res.redirect("/vanity"); //redirect to vanity page
  })
  .catch(function(error){
    res.status(400).send('Whoops');
  });
});

//export
module.exports = router;
