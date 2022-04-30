const express = require("express");
const Web3Token = require("web3-token");

const router = express.Router();

const User = require("../../../models/user");

router.get("/user", async (req, res) => {
  try {
    const token = req.headers.authorization;

    const { address } = Web3Token.verify(token);

    let user = await User.findOne({ address });
    if (!user) {
      user = await User.create({ address });
      user.save();
    }

    const username = user.username;
    const image = user.image;

    return res.json({ username, image });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "Something went wrong" });
  }
});

module.exports = router;
