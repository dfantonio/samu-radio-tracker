const { Profissao } = require('../../models');
const { validateBody } = require('../../utils/validators/general');

const editProfissao = async (req, res) => {
  validateBody(req.body, ['id']);
  const { id } = req.body;

  try {
    const response = await Profissao.findByPk(id).then(profissao => profissao.destroy());

    res.status(200).send(response);
  } catch (err) {
    res.status(412).send('Não é possível deletar este profissao');
  }
};

module.exports = editProfissao;
