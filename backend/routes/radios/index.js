const router = require('express').Router();
const listAllRoute = require('./listAll');

router.use('/listall', listAllRoute);

router.get('/', (req, res) => {
  res.send({ status: 'rota de radios' });
});

module.exports = router;
