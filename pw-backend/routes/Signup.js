const express = require("express");
const router = express.Router();
const User = require("../models/user.js");

function Signup(req, res) {
  var user = new User({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });

  user
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

router.post("/", Signup);
module.exports = router;
