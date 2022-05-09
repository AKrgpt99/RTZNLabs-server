const User = require("../../models/user");
const UserValidator = require("../../util/userValidator");

module.exports = async function (data) {
  const errors = UserValidator.validate(data);
  if (Object.keys(errors).length > 0) {
    throw errors;
  }

  return await User.create(data);
};
