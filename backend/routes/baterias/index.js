const router = require('express').Router();
const treatErrors = require('../../utils/highOrder/treatErrors');
const listBaterias = require('./listBaterias');
const addBateria = require('./addBateria');

router.get('/', listBaterias);
router.post('/', treatErrors(addBateria));

module.exports = router;
