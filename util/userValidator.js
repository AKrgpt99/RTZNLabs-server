class UserValidator {
  static validate(body) {
    let errors = {};

    const createdAt = body.createdAt;
    if (createdAt) {
      if (typeof createdAt !== "number") {
        errors.createdAt = "User createdAt is invalid";
      } else if (createdAt <= 0) {
        errors.createdAt = "User createdAt cannot be less than zero";
      }
    }

    const address = body.address;
    if (address) {
      if (typeof address !== "string") {
        errors.address = "User address is invalid";
      } else if (!address.includes("0x") || address.length !== 42) {
        errors.address = "User address is incorrectly formatted";
      }
    }

    const username = body.username;
    if (username) {
      if (typeof username !== "string") {
        errors.username = "Username is invalid";
      }
    }

    const image = body.image;
    if (image) {
      if (typeof image !== "string") {
        errors.image = "Image is invalid";
      }
    }

    const bio = body.bio;
    if (bio) {
      if (typeof bio !== "string") {
        errors.bio = "Bio is invalid";
      }
    }

    return errors;
  }
}

module.exports = UserValidator;
