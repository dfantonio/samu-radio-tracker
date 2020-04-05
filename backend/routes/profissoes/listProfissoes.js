const { Profissao } = require('../../models');

const listProfissoes = async (req, res) => {
  const response = await Profissao.findAll();

  res.send(response);
};

module.exports = listProfissoes;
