require("dotenv").config();

const express = require("express");
const app = express();

const pies = require("./controllers/piecontroller");
const user = require("./controllers/usercontroller");
const sequelize = require("./db");
sequelize.sync();
app.use(express.json());
app.use(require("./middleware/headers"));

app.listen(process.env.PORT, () =>
  console.log(`app is listening on ${process.env.PORT}`)
);

app.use("/auth", user);
app.use(require("./middleware/validate-session")); // bouncer, wont let anyone use the pies database without being authed
app.use("/pies", pies);
