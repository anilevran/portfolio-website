const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation");
const bcrypt = require("bcryptjs");

const signIn = async (req, res) => {
  //Is Form Valid
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Is Email Exist In Database
  const userTemp = await User.findOne({ email: req.body.email });
  if (!userTemp) return res.status(400).send("Email Doesn't Exist!!");

  //Compare Passwords
  const validPass = await bcrypt.compare(req.body.password, userTemp.password);
  if (!validPass) return res.status(400).send("Invalid password!!");

  //JWT
  const token = jwt.sign({ _id: userTemp._id }, process.env.TOKEN_SECRET);
  res.setHeader("auth-token", "token");

  //Find User in database
  search_params = { email: req.body.email, password: userTemp.password };
  User.find(search_params).then((result) => {
    console.log(`${result[0].email} bulundu`);
    res.send(result);
  });
};

const signUp = async (req, res) => {
  //Is Form Valid
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Is Email Exist In Database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email Already Exist!!");

  //Hashed Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //Save User to Database
  var user = new User({
    email: req.body.email,
    password: hashedPassword,
  });

  user
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

router.post("/signin", signIn);
router.post("/signup", signUp);
module.exports = router;
