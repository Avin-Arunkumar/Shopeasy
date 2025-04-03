const express = require("express");
const app = express();
const Port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to ShopEasy testing !");
});
const server = app.listen(Port, () => {
  console.log(`The port is running on ${Port}`);
});

module.exports = { app, server };
