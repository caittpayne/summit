const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("DB connected");
  })
  .catch(err => {
    console.log(err);
  });


  module.exports = mongoose;