const { Emprestimo, Bem } = require('../../models');
const { validateBody, ModelSequelizeErrors } = require('../../utils/validators/general');

const finishEmprestimo = async (req, res) => {
  validateBody(req.body, ['emprestimo']);
  const { emprestimo } = req.body;

  try {
    const { bens_id } = await Emprestimo.findByPk(emprestimo);

    await Bem.findByPk(bens_id).then(bem => bem.update({ status_id: 3 }));
    await Emprestimo.findByPk(emprestimo).then(emprestimo =>
      emprestimo.update({ usuario_retorno: req.user.usuario_id })
    );

    res.send('Empréstimo finalizado com sucesso');
  } catch (err) {
    res.status(400).send(ModelSequelizeErrors(err));
  }
};

module.exports = finishEmprestimo;
