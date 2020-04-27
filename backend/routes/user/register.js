const { Usuario } = require('../../models');
const moment = require('moment');
const { validateBody, ModelSequelizeErrors } = require('../../utils/validators/general');
const bcrypt = require('bcrypt');

const verifyEmail = async email => {
  const result = await Usuario.findOne({ where: { email } });

  if (result) throw { errors: { email: 'Email já cadastrado' } };
};

const registerUser = async (req, res) => {
  validateBody(req.body, ['nome', 'apelido', 'email', 'senha', 'nascimento']);
  const { nome, apelido, email, senha, nascimento: birthdate } = req.body;
  const nascimento = moment(birthdate, 'DD/MM/YYYY').format('YYYY-MM-DD');

  await verifyEmail(email);
  const hash = await bcrypt.hashSync(senha, 12);

  try {
    const response = await Usuario.create({
      nome,
      apelido,
      email,
      senha: hash,
      nascimento,
    });

    res.status(201).send(response);
  } catch (err) {
    res.status(400).send(ModelSequelizeErrors(err));
  }
};

module.exports = registerUser;
