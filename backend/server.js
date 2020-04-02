require('dotenv').config({ encoding: 'utf8' });
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

//Registrando CORS
app.use(cors());

app.use('/', require('./routes'));

app.listen(PORT, (req, res) => {
  console.log(`Server ativo na port ${PORT}.`);
});

module.exports = { app };
