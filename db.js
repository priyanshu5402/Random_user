var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "panu",
  database: "admindb",
});

module.exports = connection;
