const express = require("express"); // #6 define express as you are going to use it
const router = express.Router(); //#7 define the router

router.get("/", (req, res) => {
  res.send("test");
});

module.exports = router; // #8 export router and then you can get to declaring your routes
