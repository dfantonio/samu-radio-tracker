module.exports = (sequelize, DataTypes) => {
  const Radio = sequelize.define('Radio', {
    id_radio: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
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
    issi: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: {
          msg: 'issi: O campo só pode conter números',
        },
        len: {
          args: [7, 7],
          msg: 'issi: O campo deve possuir 7 caracteres',
        },
      },
    },
    patrimonio: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: {
          msg: 'patrimonio: O campo só pode conter números',
        },
        len: {
          args: [6, 6],
          msg: 'patrimonio: O campo deve possuir 6 caracteres',
        },
      },
    },
    antena: DataTypes.BOOLEAN,
    status: DataTypes.INTEGER,
  });

  return Radio;
};
