var express = require("express");
var router = express.Router();
var connection = require("../db.js");
var bcrypt = require("bcrypt");
const { DEC8_BIN } = require("mysql/lib/protocol/constants/charsets");

SelectAllElements = () => {
  return new Promise((resolve, reject) => {
    connection.query("select idusers from users ", (error, elements) => {
      if (error) {
        return reject(error);
      }
      return resolve(elements);
    });
  });
};
router.get("/", async function (req, res, next) {
  let sql = `select idusers from users`;
  const resultElements = await SelectAllElements();
  res.render("users", {
    title: "Users",
    data: resultElements,
  });
});

router.post("/", async function (req, res, next) {
  function genPassword() {
    var chars =
      "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 6;
    var pass = "";
    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      pass += chars.substring(randomNumber, randomNumber + 1);
    }
    return pass;
  }
  password = genPassword();
  
  const resp = await InsertNewData(password);
 
});

InsertNewData = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO users VALUES (idusers,"${hashedPassword}")`,
      (error, elements) => {
        if (error) {
          return reject(error);
        }
        return resolve(elements);
      }
    );
  });
};

router.post("/login", async (req, res) => {
  const user = req.body.id;
  if (user == null) {
    return res.status(400).send("Cannot find user");
  }
    if (user) {
      bcrypt.compare(req.body.password, hashedPassword, (err, result) => {
        if (result) {
          res.send("Login success");
        } else {
          // console.log();
          res.send("Login failed");
        }
      });
    }
   } );

module.exports = router;
