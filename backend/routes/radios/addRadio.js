const { Bem } = require('../../models');
const { validateBody, ModelSequelizeErrors } = require('../../utils/validators/general');

const addRadio = async (req, res) => {
  validateBody(req.body, ['serialNumber', 'patrimonio', 'issi']);
  const { serialNumber, issi, antena = false, patrimonio, status = 3 } = req.body;

  try {
    const response = await Bem.create({
      numero_serial: serialNumber,
      tipo_id: 1, // Código do rádio
      patrimonio,
      antena: !!antena,
      status_id: status, // Código para disponível
      issi,
    });

    res.status(201).send(response);
  } catch (err) {
    res.status(400).send(ModelSequelizeErrors(err));
  }
};

module.exports = addRadio;
