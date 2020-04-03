const router = require('express').Router();
const listAllRoute = require('./listAll');
const { Radio } = require('../../models');
const {
  validateBody,
  ModelSequelizeErrors
} = require('../../utils/validators/general');
const treatErrors = require('../../utils/highOrder/treatErrors');

router.use('/listall', listAllRoute);

const GetRadiosList = async (req, res) => {
  const response = await Radio.findAll();

  res.send(response);
};

const addRadio = async (req, res) => {
  validateBody(req.body, ['serialNumber', 'patrimonio', 'issi']);
  const {
    serialNumber,
    issi,
    antena = false,
    patrimonio,
    status = 3
  } = req.body;

  try {
    const response = await Radio.create({
      serial_number: serialNumber,
      patrimonio,
      antena: !!antena,
      status,
      issi
    });

    res.send(response);
  } catch (err) {
    res.status(400).send(ModelSequelizeErrors(err.errors));
  }
};

router.get('/', GetRadiosList);
router.post('/', treatErrors(addRadio));

module.exports = router;
