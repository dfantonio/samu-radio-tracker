require('dotenv').config();
const { Usuario } = require('../../models');
const { validateBody, ModelSequelizeErrors } = require('../../utils/validators/general');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Login = async (req, res) => {
  validateBody(req.body, ['email', 'senha']);
  const { email, senha } = req.body;

  try {
    const user = await Usuario.findOne({ where: { email } })
      .then(async user => {
        const passwordEqual = await bcrypt.compareSync(senha, user.senha);

        if (!passwordEqual) throw 'Senha incorreta';
        return user;
      })
      .catch(e => {
        if (typeof e === 'string') throw e;
        throw 'Usuário não encontrado';
      });

    const payload = { usuario_id: user.id, nome: user.nome };
    const accessToken = jwt.sign(payload, process.env.JWT_KEY, {
      expiresIn: '12h',
    });

    res.status(200).send({ accessToken });
  } catch (err) {
    res.status(401).send(ModelSequelizeErrors(err));
  }
};

module.exports = Login;
