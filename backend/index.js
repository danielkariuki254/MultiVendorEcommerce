//require express
const express = require("express");
const mongoose = require("mongoose");

//import body parser
const bodyParser = require("body-parser");
//import cors
const cors = require("cors");
//invoke express
const app = express();

//import route
const productRoutes = require("./routes/products");

//app middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use(productRoutes);

//declare a port
const PORT = 8000;

//listen the application
app.listen(PORT, () => {
  console.log("Server is up and running on port number :", PORT);
});

//create db connection

const DB_URL = "mongodb://127.0.0.1:27017/multivendoreccomerce";

mongoose.set("strictQuery", false);
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongodb connection success!");
  })
  .catch((err) => console.log("unsuccess!", err));

////////////////////////////////////////////////////////////////////////////////////////////////////
