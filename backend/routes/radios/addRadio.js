const { Radio } = require('../../models');
const {
  validateBody,
  ModelSequelizeErrors,
} = require('../../utils/validators/general');

const addRadio = async (req, res) => {
  validateBody(req.body, ['serialNumber', 'patrimonio', 'issi']);
  const {
    serialNumber,
    issi,
    antena = false,
    patrimonio,
    status = 3,
  } = req.body;

  try {
    const response = await Radio.create({
      serial_number: serialNumber,
      patrimonio,
      antena: !!antena,
      status,
      issi,
    });

    res.status(201).send(response);
  } catch (err) {
    res.status(400).send(ModelSequelizeErrors(err.errors));
  }
};

module.exports = addRadio;
