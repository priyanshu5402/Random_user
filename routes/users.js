var express = require("express");
var router = express.Router();

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.render("users", {
//     title: "Users",
//     data: [
//       {
//         name: "John",
//         age: "25",
//       },
//       {
//         name: "Jane",
//         age: "24",
//       },
//     ],
//   });
//   // res.send('respond with a resource');
// });
router.get("/", function (req, res, next) {
  var data = new Array();
  // var sql = `select idusers from users`;
  // connection.query(sql, function (err, result) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     for (var i = 0; i < result.length; i++) {
  //       arr.push(result[i].idusers);
  //     }
  //     res.send(arr);
  //     console.log(result);
  //   }
  // });

  const rawData = [
    {
      name: "John",
      age: "25",
    },
    {
      name: "Jane",
      age: "24",
    },
    {
      name: "Manikangkan",
      age: "23",
    },
  ];

  for (let i = 0; i < rawData.length; i++) {
    data.push(rawData[i]);
  }

  // data.push({
  //   name: "John",
  //   age: "25",
  // });
  res.render("users", {
    title: "Users",
    data,
  });
});

router.post("/", function (req, res, next) {
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
  var sql = `INSERT INTO users VALUES (idusers,"${password}")`;
  connection.query(sql, function (err) {
    if (err) throw err;
    console.log("record inserted");
    res.redirect("/a");
  });
});

module.exports = router;
