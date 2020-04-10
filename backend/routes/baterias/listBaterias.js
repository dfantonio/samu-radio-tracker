const { Bem } = require('../../models');

const listBaterias = async (req, res) => {
  const response = await Bem.findAll({
    where: {
      tipo_id: 2,
    },
  });

  res.send(response);
};

module.exports = listBaterias;
