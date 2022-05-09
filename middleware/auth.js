const Web3Token = require("web3-token");

const Web3TokenValidator = require("../util/web3-token/validator");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  const { address, body } = Web3Token.verify(token);

  const errors = Web3TokenValidator.validate(body);
  if (Object.keys(errors).length !== 0) {
    return res.status(401).json({ errors });
  }

  res.locals.address = address;

  next();
};
