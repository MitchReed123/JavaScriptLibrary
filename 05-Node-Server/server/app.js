require("dotenv").config();

var express = require("express"); // 1
var app = express(); // 2
var test = require("./controllers/testControllers");
var authTest = require("./controllers/authtestcontroller");
var user = require("./controllers/usercontroller");
var sequelize = require("./db");

sequelize.sync(); // tip: {force: true} for resseting tables

app.use(express.json());

sequelize.sync();
express.json();
app.use(require("./middleware/headers"));

app.use("/test", test);

app.use("/api/user", user);

app.use(require("./middleware/validate-session"));
app.use("/authtest", authTest);

//3         //4
app.listen(3000, function () {
  console.log("App is listening on 3000"); // 5
});

// 1 - Here we require the use of the 'express' npm package that we've installed in our dependencies
// 2 - We create an instance of express. We're actually firing off a top-level express() function, a function exported by the Express module. This allows us to create an Express app.
// 3 - app.listen will use express to start a UNIX socket and listen for connections on the given path. This method is identical to Node’s http.Server.listen().
// 4 - the given path is localhost:3000
// 5 - We call a callback function when the connection happens with a simple console.log

app.use("/api/test", function (req, res) {
  res.send("This is data from the /api/test endpoint. It's from the server");
});
