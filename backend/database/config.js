require('dotenv').config({ encoding: 'utf8' });

module.exports = {
  username: process.env.BACKEND_DB_USER,
  password: process.env.BACKEND_DB_PASSWORD,
  database: process.env.BACKEND_DB_NAME,
  port: process.env.BACKEND_DB_PORT,
  host: process.env.BACKEND_DB_HOST,
  dialect: 'mysql'
};
