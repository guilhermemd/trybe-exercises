const express = require('express');
const bodyParser = require('body-parser');
const middlewares = require('./middlewares/index')

const app = express();
app.use(bodyParser.json());

app.post('/user/register', middlewares.registerUser);

app.listen(3001, () => console.log('Rodando na porta 3001'));