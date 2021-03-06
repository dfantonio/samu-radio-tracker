module.exports = (sequelize, DataTypes) => {
  const Profissao = sequelize.define(
    'Profissao',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
        validate: {
          len: {
            args: [3, 20],
            msg: 'nome: O nome deve possuir entre 3 e 20 caracteres',
          },
        },
      },
    },
    {
      tableName: 'profissoes',
    }
  );

  return Profissao;
};
