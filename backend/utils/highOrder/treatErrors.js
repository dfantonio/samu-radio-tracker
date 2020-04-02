const processError = (error, res) => {
  if (error.response && error.response.data) {
    const status = error.response.status;

    return res.status(status).send(error.response.data);
  }
  return res.status(400).send(error);
};

function treatErrors(fn, treater = processError) {
  async function treatedFn(req, res) {
    try {
      await fn(req, res);
    } catch (error) {
      treater(error, res);
    }
  }
  return treatedFn;
}

module.exports = treatErrors;
