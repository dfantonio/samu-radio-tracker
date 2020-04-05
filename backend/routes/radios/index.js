const router = require('express').Router();
const treatErrors = require('../../utils/highOrder/treatErrors');
const listRadios = require('./listRadios');
const addRadio = require('./addRadio');
const editRadio = require('./editRadio');
const deleteRadio = require('./deleteRadio');

router.get('/', listRadios);
router.post('/', treatErrors(addRadio));
router.put('/', treatErrors(editRadio));
router.delete('/', treatErrors(deleteRadio));

module.exports = router;
