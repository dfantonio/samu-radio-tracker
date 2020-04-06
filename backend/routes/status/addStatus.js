const { Status } = require('../../models');
const { validateBody, ModelSequelizeErrors } = require('../../utils/validators/general');

const addStatus = async (req, res) => {
  validateBody(req.body, ['status']);
  const { status } = req.body;

  try {
    const response = await Status.create({
      status,
    });

    res.status(201).send(response);
  } catch (err) {
    res.status(400).send(ModelSequelizeErrors(err.errors));
  }
};

module.exports = addStatus;
