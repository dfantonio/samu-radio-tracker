const express = require("express");
const app = express();
require("dotenv").config({ encoding: "utf8" });

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/", require("./routes"));

app.listen(PORT, (req, res) => {
  console.log(`Server ativo na port ${PORT}.`);
});

module.exports = { app };
