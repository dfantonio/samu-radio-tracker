const { Bateria } = require('../../models');
const { validateBody, ModelSequelizeErrors } = require('../../utils/validators/general');

const addBateria = async (req, res) => {
  validateBody(req.body, ['serialNumber']);
  const { serialNumber, status = 3 } = req.body;

  try {
    const response = await Bateria.create({
      serial_number: serialNumber,
      status,
    });

    res.status(201).send(response);
  } catch (err) {
    res.status(400).send(ModelSequelizeErrors(err.errors));
  }
};

module.exports = addBateria;
