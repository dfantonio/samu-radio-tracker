const { Status } = require('../../models');

const listStatus = async (req, res) => {
  const response = await Status.findAll();

  res.send(response);
};

module.exports = listStatus;
