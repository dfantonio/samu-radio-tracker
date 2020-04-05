module.exports = (sequelize, DataTypes) => {
  const Profissao = sequelize.define(
    'Profissao',
    {
      id_profissao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [3, 20],
            msg: 'nome: O campo deve possuir entre 3 e 20 caracteres',
          },
        },
      },
    },
    {
      freezeTableName: true,
      tableName: 'profissoes',
    }
  );

  return Profissao;
};
