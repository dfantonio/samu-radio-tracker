const { Bem } = require('../../models');
const { validateBody } = require('../../utils/validators/general');

const editRadio = async (req, res) => {
  validateBody(req.body, ['id']);
  const { id } = req.body;

  try {
    const response = await Bem.findOne({ where: { id, tipo_id: 1 } }).then(radio =>
      radio.destroy()
    );

    res.status(200).send(response);
  } catch (err) {
    res.status(412).send('Não é possível deletar este rádio');
  }
};

module.exports = editRadio;
