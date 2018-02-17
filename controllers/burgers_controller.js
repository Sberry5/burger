var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Route to get data and render from DB
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
		};
    res.render("index", hbsObject);
  });
});

// Route to insert user input into DB
router.post('/create', function(req,res) {
	burger.create(["burger_name", "devoured"], 
	[req.body.burger_name, 0], function() {
    res.redirect('/');
  });
});


// Route to update status of DB object 
router.put('/:id', function(req,res) {
	burger.update(req.body.id, function() {
    devoured: 1,
		res.redirect("/");
	});
});


module.exports=router;