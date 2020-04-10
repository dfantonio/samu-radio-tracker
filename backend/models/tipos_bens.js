module.exports = (sequelize, DataTypes) => {
  const Tipos_bens = sequelize.define(
    'Tipos_bens',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
    },
    {
      tableName: 'tipos_bens',
    }
  );

  return Tipos_bens;
};
