const router = require('express').Router();
const treatErrors = require('../../utils/highOrder/treatErrors');
const listCarregadores = require('./listCarregadores');
const addCarregador = require('./addCarregador');
const editCarregador = require('./editCarregador');
const deleteCarregador = require('./deleteCarregador');

router.get('/', listCarregadores);
router.post('/', treatErrors(addCarregador));
router.put('/', treatErrors(editCarregador));
router.delete('/', treatErrors(deleteCarregador));

module.exports = router;
