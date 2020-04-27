const { Bem } = require('../../models');
const { validateBody, ModelSequelizeErrors } = require('../../utils/validators/general');

const addBateria = async (req, res) => {
  validateBody(req.body, ['serialNumber']);
  const { serialNumber, status = 3 } = req.body;

  try {
    const response = await Bem.create({
      numero_serial: serialNumber,
      status_id: status, // Código para disponível
      tipo_id: 2, // Código da bateria
    });

    res.status(201).send(response);
  } catch (err) {
    res.status(400).send(ModelSequelizeErrors(err));
  }
};

module.exports = addBateria;
