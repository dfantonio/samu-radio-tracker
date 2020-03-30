import EmailValidator from 'email-validator';

/**
 * @description função para validação de email
 * @param {string} email email para ser valido
 */
function emailValid(email = '') {
  return EmailValidator.validate(email);
}

/**
 * @type {string}
 */
emailValid.message = 'Email invalido!';

const emailValidation = { message: emailValid.message, isValid: emailValid };

export { emailValid, emailValidation };
