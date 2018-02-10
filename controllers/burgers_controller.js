var express = require("express");

var router = express.Router();

// Import the burger model to use database functions
var burger = require("../models/burger.js");

// Routes
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post('/', function(req,res) {
	burger.create(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function(data){
		res.redirect('/burgers')
	});
});

router.post('/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;
	console.log('condition', condition);
	burger.update({devoured: req.body.devoured}, condition, function(data){
		res.redirect('/');
	});
});

module.exports=router;