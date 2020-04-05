const router = require('express').Router();
const treatErrors = require('../../utils/highOrder/treatErrors');
const listBaterias = require('./listBaterias');
const addBateria = require('./addBateria');
const editBateria = require('./editBateria');
const deleteBateria = require('./deleteBateria');

router.get('/', listBaterias);
router.post('/', treatErrors(addBateria));
router.put('/', treatErrors(editBateria));
router.delete('/', treatErrors(deleteBateria));

module.exports = router;
