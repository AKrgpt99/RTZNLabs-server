const express = require("express");

const router = express.Router();

const authMiddleware = require("../../middleware/auth");
const { createUser, readUser } = require("../../functions/user");

router.get("/", authMiddleware, async (req, res) => {
  try {
    let user = await readUser(res.locals.address);
    if (!user) {
      user = await createUser({
        createdAt: new Date().getTime(),
        address,
        username: "",
        image: "",
        banner: "",
        bio: "",
        blockchain: "mainnet",
      });
    }

    const createdAt = user.createdAt;
    const address = user.address;
    const username = user.username;
    const image = user.image;
    const banner = user.banner;
    const bio = user.bio;
    const blockchain = user.blockchain;

    return res.json({
      createdAt,
      address,
      username,
      image,
      banner,
      bio,
      blockchain,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "Something went wrong" });
  }
});

module.exports = router;
