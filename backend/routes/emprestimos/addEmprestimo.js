const { Emprestimo, Bem } = require('../../models');
const { validateBody, ModelSequelizeErrors } = require('../../utils/validators/general');
const { isGoodAvailable, isPlaceWithinLimit } = require('../../utils/Checkers');

const addEmprestimo = async (req, res) => {
  validateBody(req.body, ['local_id', 'profissao_id', 'bem_id', 'usuario']);
  const { local_id, profissao_id, bem_id, usuario } = req.body;

  await isGoodAvailable(bem_id);

  await isPlaceWithinLimit(local_id, bem_id);

  //TODO: Configurar para validar se deve abrir o campo de descrição com base na flag do local
  try {
    await Bem.findByPk(bem_id).then(bem => bem.update({ status_id: 1 }));
    const response = await Emprestimo.create({
      bens_id: bem_id,
      local_id,
      profissao_id,
      usuario_saida: usuario,
    });

    res.status(201).send(response);
  } catch (err) {
    res.status(400).send(ModelSequelizeErrors(err.errors));
  }
};

module.exports = addEmprestimo;
