const web3TokenConfig = require("./web3-token.config");

class Web3TokenValidator {
  static validate(body) {
    let errors = {};

    const expiry = new Date(body["expiration-time"]).getTime();
    const now = new Date().getTime();
    if (now > expiry) {
      errors.expiry = "Token has expired.";
    }

    const uri = body.uri;
    if (typeof uri !== "string") {
      errors.uri = "Token URI is invalid.";
    } else if (!uri.includes(web3TokenConfig.uri)) {
      errors.uri = "Token URI is incorrect.";
    }

    const domain = body.domain;
    if (typeof domain !== "string") {
      errors.domain = "Token domain is invalid.";
    } else if (domain !== web3TokenConfig.domain) {
      errors.domain = "Token domain is incorrect";
    }

    const statement = body.statement;
    if (typeof statement !== "string") {
      errors.statement = "Token statement is invalid.";
    } else if (statement !== web3TokenConfig.statement) {
      errors.statement = "Token statement is incorrect.";
    }

    return errors;
  }
}

module.exports = Web3TokenValidator;
