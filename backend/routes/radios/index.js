const router = require('express').Router();
const treatErrors = require('../../utils/highOrder/treatErrors');
const listRadios = require('./listRadios');
const addRadio = require('./addRadio');

router.get('/', listRadios);
router.post('/', treatErrors(addRadio));
// router.put('/', treatErrors(editRadio));

module.exports = router;
