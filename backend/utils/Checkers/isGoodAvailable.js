const { Bem } = require('../../models');

async function isGoodAvailable(id) {
  const { status_id } = await Bem.findByPk(id, {
    attributes: ['status_id'],
  });

  if (status_id !== 3)
    throw { errors: { message: 'O objeto não está disponível para empréstimo' } };
  return true;
}

module.exports = {
  isGoodAvailable,
};
