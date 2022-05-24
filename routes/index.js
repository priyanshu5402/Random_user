var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Home",
    data: [
      {
        name: "John",
        age: "25",
      },
      {
        name: "Jane",
        age: "24",
      },
    ],
  });
});

module.exports = router;
