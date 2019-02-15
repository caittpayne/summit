const mongoose = require("mongoose");
const config = require("./config");

mongoose.Promise = global.Promise;

mongoose
  .connect(config.db)
  .then(() => {
    console.log(`DB Connected: ${config.db}`);
  })
  .catch(err => {
    console.log(err);
  });

module.exports = mongoose;
