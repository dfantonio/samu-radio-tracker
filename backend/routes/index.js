const routes = require("express").Router();
const radios = require("./radios");

routes.use("/radios", radios);

routes.get("/", (req, res) => res.send({ status: "Connected to server" }));

module.exports = routes;
