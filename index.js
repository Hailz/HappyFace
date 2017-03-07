//require express and other global variables
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('./config/passportConfig');
var isLoggedIn = require('./middleware/isLoggedIn');
var loggedIn=false;

require('dotenv').config();

var app = express();

//set and use statements
app.use(express.static(__dirname + '/public'));

app.set("view engine", 'ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(ejsLayouts);
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize()); //session must come before passport
app.use(passport.session());

app.use(function(req, res, next){ //custom middleware
  res.locals.currentUser = req.user;
  res.locals.alerts = req.flash();
  next();
});

//routes
app.get('/', function(req, res){
  res.render('home');
});

app.get('/vanity', isLoggedIn, function(req, res){
  res.render("vanity");
});

// all the vanity links
app.get('/productType/blush', isLoggedIn, function(req, res){
  res.render("productType/blush");
});

app.get('/productType/bronzer', isLoggedIn, function(req, res){
  res.render("productType/bronzer");
});

app.get('/productType/eyeliner', isLoggedIn, function(req, res){
  res.render("productType/eyeliner");
});

app.get('/productType/eyeshadow', isLoggedIn, function(req, res){
  res.render("productType/eyeshadow");
});

app.get('/productType/foundation', isLoggedIn, function(req, res){
  res.render("productType/foundation");
});

app.get('/productType/lipliner', isLoggedIn, function(req, res){
  res.render("productType/lipliner");
});

app.get('/productType/lipstick', isLoggedIn, function(req, res){
  res.render("productType/lipstick");
});

app.get('/productType/mascara', isLoggedIn, function(req, res){
  res.render("productType/mascara");
});

app.get('/productType/nailpolish', isLoggedIn, function(req, res){
  res.render("productType/nailpolish");
});

app.use('/auth', require('./controllers/auth'));

app.use('/search', require('./controllers/search'));


//listen
app.listen(3000);