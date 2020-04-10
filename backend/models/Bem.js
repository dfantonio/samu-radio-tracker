module.exports = (sequelize, DataTypes) => {
  const Bem = sequelize.define(
    'Bem',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      tipo_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Tipos_bens',
          key: 'id',
        },
      },
      status_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Status',
          key: 'id',
        },
      },
      numero_serial: {
        type: DataTypes.STRING(7),
        allowNull: true,
        unique: true,
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
        type: DataTypes.STRING(7),
        allowNull: true,
        unique: true,
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
        type: DataTypes.STRING(6),
        allowNull: true,
        unique: true,
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
      antena: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: '0',
      },
      criado_em: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      atualizado_em: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: 'bens',
    }
  );

  return Bem;
};
