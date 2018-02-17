// ====== Required Packages ===== //
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");

// ====== Indicate Server and Initialize Port ===== //
var PORT = process.env.PORT || 3000;
var app = express();

// ====== Indicate Server and Initialize Port ===== //
app.use(express.static("public"));

// ====== Allow Server to Interpret Data via body-parser ===== //
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ====== Setup handlebars ===== //
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ====== Import routes ===== //
app.use("/", routes);

// ====== Listener to start server ===== //
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
