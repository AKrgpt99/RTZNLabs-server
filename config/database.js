const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

exports.connect = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("Successfully connected to the database");
    })
    .catch((err) => {
      console.log("Could not connect to database");
      console.error(err);
      process.exit(1);
    });
};
