const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi stanley backend verison 45!");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});