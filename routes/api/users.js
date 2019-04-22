const express = require("express"); // #6 define express as you are going to use it
const router = express.Router(); //#7 define the router
const User = require("../../models/Users"); //define the user schemea

//this will be our first route for users and it will contain a QUERY
router.get("/", async (req, res) => {
  try {
    const user = await User.find({});

    if (user.length === 0) {
      res.json({ err: "no user exist" });
    } else {
      res.json(user);
    }
  } catch (e) {
    res.json({ Error: `Error is ${e}` });
  }
});

//this next route will be a adding route

router.post("/", async (req, res) => {
  // so first you are setting three variables to get that data from req.body where the pesron is going to make the post. then you are making a new variable and setting it to the User schema from your Users model. Then since we are inside a promise aka a async function cause of the post. In the try catch block we are taking that newUser and saving it because that is a mongoose method but we have to say await because we are in a async function
  const { title, image, description } = req.body;

  //declaring a new variable called newUser
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

//route to get a specific post from a specific user, which we are going to do by id so the route will be /:id
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id); //req.params is what is in the URL that the user passes
    if (user.length === 0) {
      res.json({ err: "no user exist" });
    } else {
      res.json(user);
    }
  } catch (e) {
    res.json({ Error: `Error is ${e}` });
  }
});

//delete user route

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete({ _id: req.params.id });
    res.json({ success: "User deleted successfully" });
  } catch (e) {
    res.json({ Error: `Error is ${e}` });
  }
});

//update or edit router
router.put("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate({ _id: req.params.id });
  } catch (e) {
    res.json({ Error: `Error is ${e}` });
  }
});

module.exports = router; // #8 export router and then you can get to declaring your routes
