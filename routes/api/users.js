const express = require("express");
const router = express.Router();
const User = require("../../db/user");

//this is your first route, the route takes a arrow function which takes in a request and response

//the one backslash route is always the default cause on default it is localhost:5000/ it includes that "/"

// this is a async function because the get function is throwing a promise as well as the find function, so we have to use something called async/await, look more into this

router.get("/", async (req, res) => {
  try {
    const user = await User.find({});

    if (user.length === 0) {
      res.json({ error: "no user exists" });
    } else {
      res.json(user);
    }
  } catch (e) {
    res.json({ Error: `error is ${e}` });
  }
});

router.post("/", async (req, res) => {
  const { title, image, description } = req.body;

  const newUser = new User({
    title,
    image,
    description
  });
  try {
    const user = await newUser.save();
    res.json(user);
  } catch (e) {
    res.json({ Error: `Error is ${e}` });
  }
});

module.exports = router;
