// Required connection
var connection = require("../config/connection.js");

// Object Relational Mappers (ORM) for sql commands
var orm = {
  all: function(table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  create: function(table, value, cb) {
    connection.query("INSERT INTO " + table + " (burger_name) VALUES (?)", value, function(err, result) {
      if (err) {
          throw err;
      }
      cb(result);
  });
},

  update: function(table, id, cb) {
    connection.query("UPDATE " + table + " SET devoured = 1 WHERE id = ?", [id], function(err, result) {
      if (err) {
          throw err;
      }
      cb(result);
  });
}
};

// Export the orm for other files
module.exports = orm;
