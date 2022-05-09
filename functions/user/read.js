const User = require("../../models/user");

module.exports = async function (address) {
  return await User.findOne({ address }).exec();
};
