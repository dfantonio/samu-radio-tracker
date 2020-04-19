const { Bem } = require('../../models');
const { validateBody } = require('../../utils/validators/general');

const editCarregador = async (req, res) => {
  validateBody(req.body, ['id']);
  const { id } = req.body;

  try {
    const response = await Bem.findOne({ where: { id, tipo_id: 3 } }).then(carregador =>
      carregador.destroy()
    );

    res.status(200).send(response);
  } catch (err) {
    res.status(412).send('Não é possível deletar este carregador');
  }
};

module.exports = editCarregador;
