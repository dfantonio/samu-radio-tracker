const validateBody = (payload, validators) => {
  const keys = validators;
  const errors = {};

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const isInvalid = !!payload[key] === false;

    if (isInvalid) errors[key] = 'Campo obrigatório';
  }
  if (Object.keys(errors).length > 0) throw { errors };
};

/**
 * @author Antônio Della Flora
 * @description Função que normaliza o objeto de erro do Sequelize
 * @param {object} payload
 */
const ModelSequelizeErrors = payload => {
  const errors = payload.map(item => {
    const array = item.message.split(': ');

    return { [array[0]]: array[1] };
  });
  const result = Object.assign({}, ...errors);

  return { errors: result };
};

module.exports = {
  validateBody,
  ModelSequelizeErrors
};
