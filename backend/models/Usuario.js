module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    'Usuario',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true,
      },
      apelido: {
        type: DataTypes.STRING(45),
        allowNull: true,
        unique: true,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      senha: {
        type: DataTypes.STRING(32),
        allowNull: true,
      },
      criado_em: {
        type: DataTypes.DATE,
      },
      atualizado_em: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: 'usuarios',
    }
  );

  return Usuario;
};
