const router = require('express').Router();
const treatErrors = require('../../utils/highOrder/treatErrors');
const login = require('./login');
const registerUser = require('./register');

router.post('/login', treatErrors(login));
router.post('/register', treatErrors(registerUser));

module.exports = router;
