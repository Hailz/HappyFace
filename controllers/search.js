var express = require('express');
var db = require('../models');
var passport = require('../config/passportConfig'); //requires the passport config we wrote
var router = express.Router();

router.get('/', function(req, res){
  res.render('/');
});