const express = require("express"); //#1 define express because that is what we are using for our server
const users = require("./routes/api/users"); //#9 import the routes file
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); //this is required to store data in the database and transalte the data

//#2 intialize the app with express and body parser
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI; //creating a variable with the MongoURI

//connecting to database
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Database connected doood"))
  .catch(err => console.log(err));

//#5 now that our app is setup we can start working on our routes so define a routes file, once you do that you can use APP.USE and intialize that file. The url is gonna be /api/users
app.use("/api/users", users);

//#3 declare a port to run the server but your not telling it to use this port just declaring the variable for the port
const PORT = process.env.PORT || 5000;

//#4 use the PORT variable you created and tell express to listen on that port

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
