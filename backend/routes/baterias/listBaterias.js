const { Bateria } = require('../../models');

const listBaterias = async (req, res) => {
  const response = await Bateria.findAll();

  res.send(response);
};

module.exports = listBaterias;
