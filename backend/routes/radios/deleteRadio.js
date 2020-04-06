const { Radio } = require('../../models');
const { validateBody } = require('../../utils/validators/general');

const editRadio = async (req, res) => {
  validateBody(req.body, ['id_radio']);
  const { id_radio } = req.body;

  try {
    const response = await Radio.findByPk(id_radio).then(radio => radio.destroy());

    res.status(200).send(response);
  } catch (err) {
    res.status(412).send('Não é possível deletar este radio');
  }
};

module.exports = editRadio;
