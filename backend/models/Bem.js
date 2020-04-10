module.exports = (sequelize, DataTypes) => {
  const Bem = sequelize.define(
    'Bem',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
      },
      issi: {
        type: DataTypes.STRING(7),
        allowNull: true,
        unique: true,
      },
      patrimonio: {
        type: DataTypes.STRING(6),
        allowNull: true,
        unique: true,
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
      nome: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
    },
    {
      tableName: 'bens',
    }
  );

  return Bem;
};
