const { Profissao } = require('../../models');
const { validateBody } = require('../../utils/validators/general');

const editProfissao = async (req, res) => {
  validateBody(req.body, ['id_profissao']);
  const { id_profissao } = req.body;

  try {
    const response = await Profissao.findByPk(id_profissao).then(profissao =>
      profissao.update(req.body)
    );

    res.status(200).send(response);
  } catch (err) {
    res.status(412).send('Não é possível editar esta profissão');
  }
};

module.exports = editProfissao;
