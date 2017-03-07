var express = require('express');
var db = require('../models');
var passport = require('../config/passportConfig'); //requires the passport config we wrote
var router = express.Router();

//define routes
router.get('/login', function(req, res){
  res.render('auth/login');
});

router.post('/login', passport.authenticate('local',{
  successRedirect: '/vanity',
  successFlash: "Good, you logged in!",
  success: loggedIn=true,
  failureRedirect: "/auth/login",
  failureFlash: "Invalid Credentials. Try again."
}));

router.get('/signup', function(req, res){
  res.render('auth/signup');
});

router.post('/signup', function(req, res, next){
  console.log(req.body);

  db.user.findOrCreate({
    where: {email: req.body.email},
    defaults: {
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: req.body.password
    }
  }).spread(function(user, wasCreated){ //returns boolean created or not
    console.log("BODY 2", req.body);
   if(wasCreated){
      //good
      passport.authenticate('local', {
        successRedirect: "/vanity",
        successFlash: "Account created and logged in. You're ready to go!",
        success: loggedIn=true
      })(req, res, next);
    } else{
      //already found, bad
      req.flash('error', 'Email already exhists!');
      res.redirect('/auth/login');
    }
  }).catch(function(err){
    console.log("ERROR", err);
    req.flash("Zoinks! Error: ", err.message);
    res.redirect("/auth/signup");
  });
});

router.get('/logout', function(req, res){
  //res.send('logged out :( ');
  req.logout();
  req.flash("You logged out :(");
  loggedIn=false;
  res.redirect('/');
});

//export
module.exports = router;