const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const { registerValidation, loginValidation } = require("../validation");

const signIn = async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { emailExist } = async () => {
    await User.find({ email: req.body.email }).then((result) => {
      if (result.length == 0) {
        return res.status(400).send("Email or password wrong");
      }
    });
  };

  search_params = { email: req.body.email, password: req.body.password };
  User.find(search_params).then((result) => {
    console.log(`${result[0].email} bulundu`);
    res.send(result);
  });
};

const signUp = async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { emailExist } = await User.find({ email: req.body.email }).then(
    (result) => {
      if (result.length == 1) {
        return res.status(400).send("Email or password wrong");
      }
    }
  );
  var user = new User({
    email: req.body.email,
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
};

router.post("/signin", signIn);
router.post("/signup", signUp);
module.exports = router;
