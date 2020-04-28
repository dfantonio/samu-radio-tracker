const validator = require('email-validator');
const moment = require('moment');

const validateEmail = email => {
  if (!validator.validate(email)) return 'Email inválido';
  return '';
};

const validatenNascimento = nascimento => {
  const today = moment(new Date(), 'DD/MM/YYYY');
  const input = moment(nascimento, 'DD/MM/YYYY');

  if (input.isSameOrAfter(today)) return 'data inválida';
  if (today.diff(input, 'years') <= 18) return 'Usuário deve ser maior de idade';
  return '';
};

const validateSenha = senha => {
  if (senha.length < 8) return 'Senha deve possuir no mínimo 8 caracteres';
  return '';
};

const validateBody = (payload, validators) => {
  const keys = validators;
  const errors = {};

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const isInvalid = !!payload[key] === false;
    let error;

    switch (key) {
      case 'email':
        error = validateEmail(payload.email);
        if (error) errors.email = error;
        break;

      case 'nascimento':
        error = validatenNascimento(payload.nascimento);
        if (error) errors.nascimento = error;
        break;

      case 'senha':
        error = validateSenha(payload.senha);
        if (error) errors.senha = error;
        break;

      default:
        error = '';
        break;
    }

    if (isInvalid) errors[key] = 'Campo obrigatório';
  }
  if (Object.keys(errors).length > 0) throw { errors };
};

const uniqueError = string => {
  const param = string.split('.')[1].split('_')[0];

  return { [param]: 'Já há um campo com este valor' };
};

/**
 * @author Antônio Della Flora
 * @description Função que normaliza o objeto de erro do Sequelize
 * @param {object} payload
 */
const ModelSequelizeErrors = payload => {
  if (!payload.errors || typeof payload.errors !== Array) return payload;
  const errors = payload.errors.map(item => {
    const array = item.message.split(': ');

    if (!array[1]) return uniqueError(item.message);
    return { [array[0]]: array[1] };
  });
  const result = Object.assign({}, ...errors);

  return { errors: result };
};

module.exports = {
  validateBody,
  ModelSequelizeErrors,
};
