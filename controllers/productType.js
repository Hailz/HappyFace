var express = require('express');
var router = express.Router();
var request = require('request');
var db = require('../models');
var app =express();

router.get('/face', function(req, res){
  var productType = req.query.productType;
  db.product.findAll({
    where: {
      userId: req.user.id,
      productType: " " + productType
    }
  }).then(function(product){
    res.render('productType/'+productType, {product: product})
  });
});

  
//export
module.exports = router;