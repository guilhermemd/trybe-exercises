const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

require('dotenv').config();

// const { PORT } = process.env;

const PORT = 3000;
// const router = require('./routes/router');

const userRouter = require('./routes/userRouter');

app.use('/user', userRouter);

// app.get('/', router);

app.listen(PORT, () => {
  console.log(`Acessar: http://localhost:${PORT}`);
  console.log(`Server listening on port ${PORT}`);
});
