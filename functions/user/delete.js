const User = require("../../models/user");

module.exports = async function (address) {
  return await User.findOneAndDelete({ address });
};
