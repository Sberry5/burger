// ====== Required Packages ===== //
var express = require("express");
var path = require("method-override");
var bodyParser = require("body-parser");


// ====== Indicate Server and Initialize Port ===== //
var app = express();
var PORT = process.env.PORT || 3000;


// ====== Allow Server to Interpret Data via body-parser ===== //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("app/public"));


// ====== Map for server use routes created ===== //
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// ====== Listener to start server ===== //
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
