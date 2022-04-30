const { Schema, model } = require("mongoose");

const Types = Schema.Types;

const userSchema = new Schema({
  address: { type: Types.String, _id },
  username: { type: Types.String },
  image: { type: Types.String },
});

module.exports = model("User", userSchema);
