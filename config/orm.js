// Required connection
var connection = require("../connection.js");


// Object Relational Mappers (ORM) for sql commands

var orm = {
  selectALL: function(callback) {
    var queryString = "SELECT * FROM" + table;
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  // insertOne: function(table, column, userInput, callback) {
  //   var queryString = "INSERT INTO" + table + "(" + column + ") VALUES (?)";
  //   console.log(queryString);
  //   connection.query(queryString, [userInput], function(err, result) {
  //     if (err) throw err;
  //     callback(result);
  //     console.log(result);
  //   });
  // },

  // updateOne: function(selectedItem, tableTwoForeignKey, tableOne, tableTwo) {
  //   var queryString = "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

  //   connection.query(queryString, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol], function(err, result) {
  //     console.log(result);
  //   });
  // }
};


// Export the orm for other files
module.exports = orm;
