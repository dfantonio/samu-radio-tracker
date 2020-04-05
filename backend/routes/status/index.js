const router = require('express').Router();
const treatErrors = require('../../utils/highOrder/treatErrors');
const listStatus = require('./listStatus');
const addStatus = require('./addStatus');
const editStatus = require('./editStatus');
const deleteStatus = require('./deleteStatus');

router.get('/', listStatus);
router.post('/', treatErrors(addStatus));
router.put('/', treatErrors(editStatus));
router.delete('/', treatErrors(deleteStatus));

module.exports = router;
