module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define(
    'Status',
    {
      id_status: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      status: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [3, 20],
            msg: 'status: O status deve possuir entre 3 e 20 caracteres',
          },
        },
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Status;
};
