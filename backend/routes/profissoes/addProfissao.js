const { Profissao } = require('../../models');
const {
  validateBody,
  ModelSequelizeErrors,
} = require('../../utils/validators/general');

const addProfissao = async (req, res) => {
  validateBody(req.body, ['nome']);
  const { nome } = req.body;

  try {
    const response = await Profissao.create({
      nome,
    });

    res.status(201).send(response);
  } catch (err) {
    res.status(400).send(ModelSequelizeErrors(err.errors));
  }
};

module.exports = addProfissao;
