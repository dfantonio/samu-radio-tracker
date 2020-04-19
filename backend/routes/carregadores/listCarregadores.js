const { Bem } = require('../../models');

const listRadios = async (req, res) => {
  const { status } = req.query;
  const where = {};

  if (status) {
    where.status_id = status;
  }
  const response = await Bem.findAll({
    where: {
      tipo_id: 3,
      ...where,
    },
  });

  res.send(response);
};

module.exports = listRadios;
