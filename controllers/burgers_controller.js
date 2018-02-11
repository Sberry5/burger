var express = require("express");
var router = express.Router();

// Import the burger model to use database functions
var burger = require("../models/burger.js");

// Route to get data and render from DB
router.get("/", (req, res) => {
  burger.all((data) => {
    var hbsObject = {
      burgers: data
		};
		console.log("Data from DB in GET request");
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Route to insert user input into DB
router.post('/burgers/create', (req,res) => {
	burger.create(['burger_name'], [req.body.burger_name], (data) => {
		res.redirect('/')
	});
});

// Route to update status of DB object 
router.put('/burgers/update/:id', (req,res) => {
	var condition = 'id = ' + req.params.id;
	//console.log('condition', condition);
	burger.update({devoured: req.body.devoured}, condition, (data) => {
		res.redirect('/');
	});
});

module.exports=router;