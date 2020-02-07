const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
const Models = require("./app/models");
const sequelize = require("sequelize");
const PORT = process.env.PORT || 3786;
const router = require("./app/config/route");

Models.sequelize
  .sync({
    force: false,
    logging: console.log
  })
  .then(() => {
    console.log("Database connected ..... :)");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello, Welcome to Xcelpro");
});

app.use(cors());
app.use("/", router);

app.listen(PORT, () => {
  console.log("Server Started on ", PORT);
});
