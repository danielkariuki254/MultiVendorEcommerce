const mongoose = require("mongoose");

//declare a variable and initialize mongoose schema
const productSchema = new mongoose.Schema({
  //attibutes
  worker: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },
});

//export module

//db name                   //db name
const Product = mongoose.model("products", productSchema);
module.exports = Product;
