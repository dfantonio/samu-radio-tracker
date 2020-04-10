module.exports = (sequelize, DataTypes) => {
  const Emprestimo = sequelize.define(
    'Emprestimo',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      local_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Local',
          key: 'id',
        },
      },
      profissao_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Profissao',
          key: 'id',
        },
      },
      bens_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Bem',
          key: 'id',
        },
      },
      usuario_saida: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Usuario',
          key: 'id',
        },
      },
      usuario_retorno: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Usuario',
          key: 'id',
        },
      },
      emprestado_em: {
        type: DataTypes.DATE,
      },
      devolvido_em: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: 'emprestimos',
    }
  );

  return Emprestimo;
};
