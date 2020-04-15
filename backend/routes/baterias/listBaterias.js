const { Bem } = require('../../models');

const listBaterias = async (req, res) => {
  const { status } = req.query;
  const where = {};

  if (status) {
    where.status_id = status;
  }
  const response = await Bem.findAll({
    where: {
      tipo_id: 2,
      ...where,
    },
  });

  res.send(response);
};

module.exports = listBaterias;
