const { Bem, Local } = require('../../models');
const { currentLoans } = require('./currentLoans');

/**
 * @author Antônio Della Flora
 * @description Função que verifica se o limite de empréstimo de um objeto
 * foi atingido
 * @param {number} local_id - ID do local
 * @param {number} bem_id - ID do bem
 */
async function isPlaceWithinLimit(local_id, bem_id) {
  const { tipo_id } = await Bem.findByPk(bem_id, {
    attributes: ['tipo_id'],
  });
  const { limite_radios, limite_baterias, limite_carregador } = await Local.findByPk(
    local_id,
    {
      attributes: ['limite_radios', 'limite_baterias', 'limite_carregador'],
    }
  );
  const limits = [limite_radios, limite_baterias, limite_carregador, 999];
  const name = ['rádios', 'baterias', 'carregadores'];

  const max = limits[tipo_id - 1];

  const currentLoansAmount = await currentLoans(local_id, tipo_id);

  if (currentLoansAmount >= max)
    throw {
      errors: {
        message: `O limite máximo de ${
          name[tipo_id - 1]
        } foi atingido para o local desejado`,
      },
    };

  return true;
}

module.exports = {
  isPlaceWithinLimit,
};
