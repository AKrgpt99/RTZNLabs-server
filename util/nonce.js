const { floor, random } = require("mathjs");

const generateNonce = () => {
  return floor(random() * 1000000);
};

module.exports = { generateNonce };
