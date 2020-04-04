module.exports = (sequelize, DataTypes) => {
  const Bateria = sequelize.define(
    'Bateria',
    {
      id_bateria: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      status: DataTypes.STRING(20),
      serial_number: {
        type: DataTypes.STRING,
        validate: {
          isNumeric: {
            msg: 'serialNumber: O campo só pode conter números',
          },
          len: {
            args: [7, 7],
            msg: 'serialNumber: O campo deve possuir 7 caracteres',
          },
        },
      },
    },
    {
      freezeTableName: true,
      tableName: 'baterias',
    }
  );

  return Bateria;
};
