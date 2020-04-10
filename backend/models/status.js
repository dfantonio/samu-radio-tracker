module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define(
    'Status',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      status: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
        validate: {
          len: {
            args: [3, 20],
            msg: 'status: O status deve possuir entre 3 e 20 caracteres',
          },
        },
      },
    },
    {
      tableName: 'status',
    }
  );

  return Status;
};
