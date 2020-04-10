const { Bem } = require('../../models');

const listRadios = async (req, res) => {
  const response = await Bem.findAll({
    where: {
      tipo_id: 1,
    },
  });

  res.send(response);
};

module.exports = listRadios;
