var express = require('express');
var router = express.Router();
var request = require('request');
var db = require('../models');
var app =express();
app.use(express.static(__dirname + "/public"));

router.get('/product', function(req, res){
  console.log(req.query);
//   // db.products.findAll().then(function(result){
//   //   res.render('/vanity', {
//   //     product: name,
//   //     product: productType,
//   //     product: imageLink,
//   //     product: productLink
//   //   }).catch(function(error){
//   //     res.status(404).send("Oh bananas.");
//   //   });
//   // });
})

// router.post('/result', function(req, res){
//   console.log(req.body);
//   // db.product.create(req.body).then(function(newProduct){
//   //   res.send('Product added!');
//   // });
// });