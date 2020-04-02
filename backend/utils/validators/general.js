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

module.exports = {
  validateBody
};
