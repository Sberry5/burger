// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm");

var burger = {
  all: function(cb) {
    orm.all('burgers', function(res) {
      cb(res);
    });
  },
  create: function(value, cb) {
    orm.create('burgers', value, function(res) {
      cb(res);
    });
  },
  update: function(id, cb) {
    orm.update('burgers', id, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller, burger.ks.
module.exports = burger;