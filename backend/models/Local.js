const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  const Local = sequelize.define(
    'Local',
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
      sigla: {
        type: DataTypes.STRING(5),
        allowNull: false,
        unique: true,
        validate: {
          len: {
            args: [2, 5],
            msg: 'sigla: A sigla deve possuir entre 2 e 5 caracteres',
          },
        },
      },
      criado_em: {
        type: DataTypes.DATE,
        get() {
          return moment(this.getDataValue('criado_em')).format('DD/MM/YYYY h:mm:ss');
        },
      },
      atualizado_em: {
        type: DataTypes.DATE,
      },
      limite_radios: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 2,
      },
      limite_baterias: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 4,
      },
      limite_carregador: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      descricao: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
    },
    {
      tableName: 'locais',
    }
  );

  return Local;
};
