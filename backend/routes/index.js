const { sequelize } = require('../models');
const routes = require('express').Router();
const user = require('./user');
const radios = require('./radios');
const status = require('./status');
const locais = require('./locais');
const baterias = require('./baterias');
const profissoes = require('./profissoes');
const emprestimos = require('./emprestimos');
const carregadores = require('./carregadores');
const { authenticateToken } = require('../utils/middlewares/authenticateToken');

routes.use('/user', user);
routes.use('/radios', authenticateToken, radios);
routes.use('/status', authenticateToken, status);
routes.use('/locais', authenticateToken, locais);
routes.use('/baterias', authenticateToken, baterias);
routes.use('/profissoes', authenticateToken, profissoes);
routes.use('/emprestimos', authenticateToken, emprestimos);
routes.use('/carregadores', authenticateToken, carregadores);

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
