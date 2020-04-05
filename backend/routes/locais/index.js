const router = require('express').Router();
const treatErrors = require('../../utils/highOrder/treatErrors');
const listLocais = require('./listLocais');
const addLocal = require('./addLocal');
const editLocal = require('./editLocal');
const deleteLocal = require('./deleteLocal');

router.get('/', listLocais);
router.post('/', treatErrors(addLocal));
router.put('/', treatErrors(editLocal));
router.delete('/', treatErrors(deleteLocal));

module.exports = router;
