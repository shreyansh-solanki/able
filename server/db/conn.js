const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/able_assignment", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Open!!!");
  })
  .catch((err) => {
    console.log("Error!!!");
    console.log(err);
  });
