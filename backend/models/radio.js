module.exports = (sequelize, DataTypes) => {
  const Radio = sequelize.define('Radio', {
    id_radio: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    serial_number: DataTypes.STRING,
    issi: DataTypes.STRING,
    antena: DataTypes.BOOLEAN,
    status: DataTypes.INTEGER
  });

  return Radio;
};
