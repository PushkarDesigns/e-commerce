const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use("/", (request, response) => {
  response.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
