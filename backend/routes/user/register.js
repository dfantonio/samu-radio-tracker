const { Usuario } = require('../../models');
const { validateBody, ModelSequelizeErrors } = require('../../utils/validators/general');
const bcrypt = require('bcrypt');

const verifyEmail = async email => {
  const result = await Usuario.findOne({ where: { email } });

  if (result) throw { errors: { email: 'Email já cadastrado' } };
};

const registerUser = async (req, res) => {
  validateBody(req.body, ['nome', 'email']);
  const { nome, apelido, email, senha } = req.body;

  await verifyEmail(email);
  const hash = senha ? await bcrypt.hashSync(senha, 12) : '';

  try {
    const response = await Usuario.create({
      nome,
      apelido,
      email,
      senha: hash,
    });

    res.status(201).send(response);
  } catch (err) {
    res.status(400).send(ModelSequelizeErrors(err));
  }
};

module.exports = registerUser;
