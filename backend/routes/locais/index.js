const router = require('express').Router();
const treatErrors = require('../../utils/highOrder/treatErrors');
const listLocais = require('./listLocais');
const addLocal = require('./addLocal');
const editLocal = require('./editLocal');

router.get('/', listLocais);
router.post('/', treatErrors(addLocal));
router.put('/', treatErrors(editLocal));

module.exports = router;
