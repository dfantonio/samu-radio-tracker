const { Local } = require('../../models');
const { validateBody } = require('../../utils/validators/general');

const editLocal = async (req, res) => {
  validateBody(req.body, ['id_local']);
  const { id_local } = req.body;

  try {
    const response = await Local.findByPk(id_local).then(local =>
      local.update(req.body)
    );

    res.status(200).send(response);
  } catch (err) {
    res.status(412).send('Não é possível editar este local');
  }
};

module.exports = editLocal;
