const { Emprestimo } = require('../../models');
const { Op } = require('sequelize');

/**
 * @example {
 *  local_id: 3,
 *  status: 1 || 3 || null
 * }
 */
const listEmprestimos = async (req, res) => {
  const { local, status } = req.body;
  const where = {};

  if (status) {
    if (status === 1) where.devolvido_em = { [Op.is]: null };
    if (status === 3) where.devolvido_em = { [Op.not]: null };
  }
  if (local) where.local_id = local;

  const response = await Emprestimo.findAll({
    where,
  });

  res.send(response);
};

module.exports = listEmprestimos;
