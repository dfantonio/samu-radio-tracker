const router = require('express').Router();
const treatErrors = require('../../utils/highOrder/treatErrors');
const listEmprestimos = require('./listEmprestimos');
const addEmprestimo = require('./addEmprestimo');
const finishEmprestimo = require('./finishEmprestimo');

router.get('/', listEmprestimos);
router.post('/', treatErrors(addEmprestimo));
router.put('/', treatErrors(finishEmprestimo));

module.exports = router;
