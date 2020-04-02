const { sequelize } = require('../models');
const routes = require('express').Router();
const radios = require('./radios');
const status = require('./status');
const register = require('./register');

routes.use('/radios', radios);
routes.use('/status', status);
routes.use('/register', register);

routes.get('/', (req, res) =>
  sequelize
    .authenticate()
    .then(() => {
      res.send('Connection has been established successfully.');
    })
    .catch(err => {
      res.send('Unable to connect to the database:', err);
    })
);

module.exports = routes;
