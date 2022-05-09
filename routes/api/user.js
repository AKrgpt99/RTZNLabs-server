const express = require("express");

const router = express.Router();

const authMiddleware = require("../../middleware/auth");
const { updateUser, deleteUser, readUser } = require("../../functions/user");

router.post("/", authMiddleware, async (req, res) => {
  try {
    await updateUser(res.locals.address, req.body);
    return res.json({ message: "Successfully updated user" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "Something went wrong" });
  }
});

router.delete("/", authMiddleware, async (req, res) => {
  try {
    await deleteUser(req.locals.address);
    return res.json({ message: "Successfully deleted user" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "Something went wrong" });
  }
});

router.get("/:address", async (req, res) => {
  try {
    const user = await readUser(req.params.address);

    const createdAt = user.createdAt;
    const address = user.address;
    const username = user.username;
    const image = user.image;
    const bio = user.bio;

    console.log({ createdAt, address, username, image, bio });
    return res.json({ createdAt, address, username, image, bio });
  } catch (error) {
    console.log(err);
    return res.status(400).json({ error: "Something went wrong" });
  }
});

module.exports = router;
