const { Schema, model } = require("mongoose");

const Types = Schema.Types;

const projectSchema = new Schema({
  user: { type: Types.ObjectId, ref: "User" },
  name: { type: Types.String },
});

module.exports = model("Project", projectSchema);
