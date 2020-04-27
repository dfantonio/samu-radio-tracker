const { Bem } = require('../../models');
const { validateBody, ModelSequelizeErrors } = require('../../utils/validators/general');

const addCarregador = async (req, res) => {
  validateBody(req.body, ['serialNumber']);
  const { serialNumber, status = 3 } = req.body;

  try {
    const response = await Bem.create({
      numero_serial: serialNumber,
      tipo_id: 3, // Código do carregador
      status_id: status, // Código para disponível
    });

    res.status(201).send(response);
  } catch (err) {
    res.status(400).send(ModelSequelizeErrors(err));
  }
};

module.exports = addCarregador;
