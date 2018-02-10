var express = require("express");

var router = express.Router();

// Import the burger model to use database functions
var burger = require("../models/burger.js");

// Route to pull render from DB
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Route to insert user input into DB
router.post('/', function(req,res) {
	burger.create(['burger_name'], [req.body.burger_name], function(data){
		res.redirect('/')
	});
});

// Route to update status of DB object 
router.put('/burgers/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;
	console.log('condition', condition);
	burger.update({devoured: req.body.devoured}, condition, function(data){
		res.redirect('/');
	});
});

module.exports=router;