module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define(
    'Status',
    {
      id_status: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      status: DataTypes.STRING(20)
    },
    {
      freezeTableName: true
    }
  );

  return Status;
};
