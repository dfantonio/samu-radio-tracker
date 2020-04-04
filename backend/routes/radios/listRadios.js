const { Radio } = require('../../models');

const listRadios = async (req, res) => {
  const response = await Radio.findAll();

  res.send(response);
};

module.exports = listRadios;
