const express = require("express");

//import user model
const products = require("../models/products");

//invoke router interface
const router = express.Router();

//CRUD
//CREATE-----------------------------Use post http request----------------------------------------------------------------------------------------------

router.post("/product/save", (req, res) => {
  //create variable and instantiate
  let newProduct = new products(req.body);

  //save
  newProduct.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    return res.status(200).json({
      success: "posts saved successfully",
    });
  });
});
module.exports = router;
