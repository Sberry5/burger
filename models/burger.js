// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(result) {
      cb(result);
    });
  },
  create: function(table, columns, values, cb) {
    orm.insertOne("burgers", columns, values, function(result) {
      cb(result);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(result) {
      cb(result);
    });
  },
};

// Export the database functions for the controller, burger.ks.
module.exports = burger;