const { Schema, model } = require("mongoose");

const Types = Schema.Types;

const userSchema = new Schema({
  createdAt: { type: Types.Number },
  address: { type: Types.String },
  username: { type: Types.String },
  image: { type: Types.String },
  banner: { type: Types.String },
  bio: { type: Types.String },
  blockchain: { type: Types.String },
});

module.exports = model("User", userSchema);
