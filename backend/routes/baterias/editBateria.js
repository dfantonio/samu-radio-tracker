const { Bem } = require('../../models');
const { validateBody } = require('../../utils/validators/general');

const editBateria = async (req, res) => {
  validateBody(req.body, ['id']);
  const { id } = req.body;

  try {
    const response = await Bem.findOne({ where: { id, tipo_id: 2 } }).then(bateria =>
      bateria.update(req.body)
    );

    res.status(200).send(response);
  } catch (err) {
    res.status(412).send('Não é possível editar esta bateria');
  }
};

module.exports = editBateria;
