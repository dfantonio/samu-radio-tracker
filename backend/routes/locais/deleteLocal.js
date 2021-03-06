const { Local } = require('../../models');
const { validateBody } = require('../../utils/validators/general');

const editLocal = async (req, res) => {
  validateBody(req.body, ['id']);
  const { id } = req.body;

  try {
    const response = await Local.findByPk(id).then(local => local.destroy());

    res.status(200).send(response);
  } catch (err) {
    res.status(412).send('Não é possível deletar este local');
  }
};

module.exports = editLocal;
