const { Status } = require('../../models');
const { validateBody } = require('../../utils/validators/general');

const editStatus = async (req, res) => {
  validateBody(req.body, ['id_status']);
  const { id_status } = req.body;

  try {
    const response = await Status.findByPk(id_status).then((status) =>
      status.update(req.body)
    );

    res.status(200).send(response);
  } catch (err) {
    res.status(412).send('Não é possível editar este status');
  }
};

module.exports = editStatus;
