const User = require("../../models/user");
const UserValidator = require("../../util/userValidator");

module.exports = async function (address, data) {
  const errors = UserValidator.validate(data);
  if (Object.keys(errors).length > 0) {
    throw errors;
  }

  await User.findOneAndUpdate({ address }, data);
};
