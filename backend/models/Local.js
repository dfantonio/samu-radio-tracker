module.exports = (sequelize, DataTypes) => {
  const Local = sequelize.define(
    'Local',
    {
      id_local: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING,
        validate: {
          min: {
            args: 3,
            msg: 'nome: O campo deve possuir no mínimo 3 caracteres',
          },
        },
      },
      sigla: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [2, 5],
            msg: 'sigla: O campo deve possuir entre 2 e 5 caracteres',
          },
        },
      },
    },
    {
      freezeTableName: true,
      tableName: 'locais',
    }
  );

  return Local;
};
