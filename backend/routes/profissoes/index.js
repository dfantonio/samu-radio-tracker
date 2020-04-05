const router = require('express').Router();
const treatErrors = require('../../utils/highOrder/treatErrors');
const listProfissoes = require('./listProfissoes');
const addProfissao = require('./addProfissao');
const editProfissao = require('./editProfissao');
const deleteProfissao = require('./deleteProfissao');

router.get('/', listProfissoes);
router.post('/', treatErrors(addProfissao));
router.put('/', treatErrors(editProfissao));
router.delete('/', treatErrors(deleteProfissao));

module.exports = router;
