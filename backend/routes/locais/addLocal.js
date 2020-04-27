const { Local } = require('../../models');
const { validateBody, ModelSequelizeErrors } = require('../../utils/validators/general');

const addLocal = async (req, res) => {
  validateBody(req.body, ['nome', 'sigla']);
  const {
    nome,
    sigla,
    limite_radios,
    limite_baterias,
    limite_carregador,
    descricao,
  } = req.body;

  try {
    const response = await Local.create({
      sigla: sigla.toUpperCase(),
      nome,
      limite_radios,
      limite_baterias,
      limite_carregador,
      descricao: !!descricao,
    });

    res.status(201).send(response);
  } catch (err) {
    res.status(400).send(ModelSequelizeErrors(err));
  }
};

module.exports = addLocal;
