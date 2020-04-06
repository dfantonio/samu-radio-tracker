const { Local } = require('../../models');
const { validateBody, ModelSequelizeErrors } = require('../../utils/validators/general');

const addLocal = async (req, res) => {
  validateBody(req.body, ['nome', 'sigla']);
  const { nome, sigla } = req.body;

  try {
    const response = await Local.create({
      sigla: sigla.toUpperCase(),
      nome,
    });

    res.status(201).send(response);
  } catch (err) {
    res.status(400).send(ModelSequelizeErrors(err.errors));
  }
};

module.exports = addLocal;
