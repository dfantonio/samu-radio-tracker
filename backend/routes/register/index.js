const router = require('express').Router();
const addRadio = require('./addRadio');
const treatErrors = require('../../utils/highOrder/treatErrors');

router.post('/addradio', treatErrors(addRadio));

router.get('/', (req, res) => {
  res.send({ status: 'acessou /register' });
});

module.exports = router;
