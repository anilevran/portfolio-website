const express = require("express");
const router = express.Router();
const Product = require("../models/product.js");

function AdminPanel(req, res) {
  //Get products
  Product.find().then((result) => {
    res.send(result);
  });

  //Save products
  // var product = new Product({
  //   name: req.body.name,
  //   type: req.body.type,
  //   size: req.body.size,
  //   price: req.body.price,
  // });

  // product
  //   .save()
  //   .then((result) => {
  //     res.send(result);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
}
router.get("/", AdminPanel);
// router.post("/", AdminPanel);
module.exports = router;
