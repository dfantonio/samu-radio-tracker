module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    'Usuario',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true,
      },
      apelido: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      senha: {
        type: DataTypes.STRING(32),
        allowNull: false,
      },
      nascimento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
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
