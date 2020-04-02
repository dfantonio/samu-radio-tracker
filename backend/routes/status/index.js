const router = require('express').Router();
const { Status } = require('../../models');

const listAllStatus = async (req, res) => {
  const response = await Status.findAll();

  res.send(response);
};

router.get('/', listAllStatus);

module.exports = router;
