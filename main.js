const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const shoeRoutes = require("./routes/shoeRoutes");

app.use(express.json());
app.use(cors());

app.use(shoeRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/shoes");

app.listen(3000, () =>
  console.log("Server started on http://localhost:3000/shoes")
);
