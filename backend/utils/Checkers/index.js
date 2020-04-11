const { currentLoans } = require('./currentLoans');
const { isGoodAvailable } = require('./isGoodAvailable');
const { isPlaceWithinLimit } = require('./isPlaceWithinLimit');

module.exports = {
  currentLoans,
  isGoodAvailable,
  isPlaceWithinLimit,
};
