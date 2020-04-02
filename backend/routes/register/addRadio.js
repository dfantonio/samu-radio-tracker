const { validateBody } = require('../../utils/validators/general');
const { Radio } = require('../../models');

const addRadio = (req, res) => {
  validateBody(req.body, ['serialNumber', 'patrimonio', 'antena', 'issi']);

  Radio.create({
    serial_number: '1234',
    issi: '1234',
    antena: true,
    status: 3
  });

  res.send(req.body);
};

module.exports = addRadio;
