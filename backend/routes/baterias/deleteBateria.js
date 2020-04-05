const { Bateria } = require('../../models');
const { validateBody } = require('../../utils/validators/general');

const editBateria = async (req, res) => {
  validateBody(req.body, ['id_bateria']);
  const { id_bateria } = req.body;

  try {
    const response = await Bateria.findByPk(id_bateria).then(bateria =>
      bateria.destroy()
    );

    res.status(200).send(response);
  } catch (err) {
    res.status(412).send('Não é possível deletar este bateria');
  }
};

module.exports = editBateria;
