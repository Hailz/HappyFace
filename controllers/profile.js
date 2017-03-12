var express = require('express');
var router = express.Router();
var request = require('request');
var db = require('../models');
var app =express();


router.get('/', function(req, res){
  db.user.find({
    where: {id: req.user.id}
  }).then(function(user){
    res.render('profile',{user:user});
  });
});

router.get('/update', function(req, res){
  db.user.update({
    email: req.query.email,
    username: req.query.username,
    firstname: req.query.firstname,
    lastname: req.query.lastname
  }, {
    where: {id: req.user.id}
  }).then(function(user){
      res.render('/')
  });
});

router.post('/delete', function(req, res){
  db.user.destroy({
    where: {
      id: req.user.id
    }
  }).then(function(){
    res.redirect('/');
  });
});


module.exports = router;