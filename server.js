const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = require("./routes/api/users");

//this declare a new express server
const app = express();
//these are some middlewares we will need
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//connecting to  mongodb
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Database connected Successfully"))
  .catch(err => console.log(err));
//routes
app.use("/api/users", users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

//you can have routes here but it is good to just seperate them into the routes foler but you can have this code here
// app.get("/", (req, res) => {
//     res.send("Hello World");
//   });
