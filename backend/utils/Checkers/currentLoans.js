const { Emprestimo, Bem } = require('../../models');
const { Op } = require('sequelize');

/**
 * @author Antônio Della Flora
 * @description Função que verifica quantos objetos de um
 * tipo estão emprestados para certo lugar
 * @param {number} local_id - ID do local
 * @param {number} tipo_id - ID do tipo de produto
 */
async function currentLoans(local_id, tipo_id) {
  const { count } = await Emprestimo.findAndCountAll({
    include: [{ model: Bem, required: true, where: { tipo_id } }],
    where: {
      local_id,
      devolvido_em: {
        [Op.is]: null,
      },
    },
  });

  return count;
}

module.exports = {
  currentLoans,
};
