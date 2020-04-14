const { Emprestimo, Local, Bem, Tipos_bens } = require('../../models');
const { Op } = require('sequelize');
const moment = require('moment');

/**
 * @example {
 *  local_id: 3,
 *  status: 1 || 3 || null
 * }
 */
const listEmprestimos = async (req, res) => {
  const { local, status } = req.query;
  const where = {};

  if (status) {
    if (status === '1') where.devolvido_em = { [Op.is]: null };
    if (status === '3') where.devolvido_em = { [Op.not]: null };
  }
  if (local) where.local_id = local;

  const response = await Emprestimo.findAll({
    include: [
      { model: Local, required: true, attributes: ['nome', 'sigla'] },
      {
        model: Bem,
        required: true,
        attributes: ['numero_serial'],
        include: [{ model: Tipos_bens, required: true, attributes: ['nome'] }],
      },
    ],
    where,
    raw: true,
  });

  // Tipos_ben é por causa da conversão entre plural e singular q o sequelize faz
  const result = response.map(emprestimo => {
    const local = { nome: emprestimo['Local.nome'], sigla: emprestimo['Local.sigla'] };
    const bem = {
      numero_serial: emprestimo['Bem.numero_serial'],
      tipo: emprestimo['Bem.Tipos_ben.nome'],
    };

    emprestimo.emprestado_em = moment(emprestimo.emprestado_em).format(
      'DD/MM/YYYY hh:mm:ss'
    );

    delete emprestimo['Local.nome'];
    delete emprestimo['Local.sigla'];
    delete emprestimo['Bem.numero_serial'];
    delete emprestimo['Bem.Tipos_ben.nome'];

    return { ...emprestimo, local, bem };
  });

  res.send(result);
};

module.exports = listEmprestimos;
