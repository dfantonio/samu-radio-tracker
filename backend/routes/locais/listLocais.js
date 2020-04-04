const { Local } = require('../../models');

const listLocais = async (req, res) => {
  const response = await Local.findAll();

  res.send(response);
};

module.exports = listLocais;
