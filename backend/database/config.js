require("dotenv").config({ encoding: "utf8" });

//database config MYSQL + KNEX
module.exports = knex = require("knex")({
  client: "mysql",
  connection: {
    host: process.env.BACKEND_DB_HOST,
    user: process.env.BACKEND_DB_USER,
    password: process.env.BACKEND_DB_PASSWORD,
    database: process.env.BACKEND_DB_NAME
  }
});
