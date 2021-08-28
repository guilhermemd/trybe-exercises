// const express = require('express');
// const app = express();

// const rescue = require('express-rescue')
const { getSimpsons, setSimpsons  } = require('./fs-part');

const app = require('express')(); //Dica do Rafa

const bodyParser = require('body-parser');
const rescue = require('express-rescue');
app.use(bodyParser.json());

// exercicio 1
app.get('/ping', (_req, res) => 
  res.status(200).json( { message: 'pong' } ) 
) ;

// exercicio 2
app.post('/hello', function (req, res) {
  const { name } = req.body;
  res.status(200).json( { message: `Hello, ${name}` })
});

// Exercio 3
app.post('/greetings', function (req, res) {
  const { name, age } = req.body;
  if(age < 18) return res.status(401).json({ message: "Unauthorized" })
  res.status(200).json( { message: `Hello, ${name}` })
});

// Exercicio 4

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(200).json( { message: `Seu nome é ${name} e você tem ${age} anos de idade` })
})

// exercicio 7
app.get(
  '/simpsons/:id',
  rescue(async (req, res) => {
    const simpsons = await getSimpsons();

    const simpson = simpsons.find(({ id }) => id === req.params.id);

    if (!simpson) {
      return res.status(404).json({ message: 'simpson not found' });
    }

    return res.status(202).json(simpson);
  })
);

// Exercicio 6
app.get('/simpsons', rescue(async (req, res) => {
  const simpsons = await getSimpsons();

  res.status(200).json(simpsons);
}))

// Exercicio 7
// app.get('/simpsons/:id', (req, res) => {
//   const { id } = req.params;
//   const simpsonsFunc = readSimpsons();
//   const existSimpson = simpsonsFunc.find((s) => s.id === parseInt(id));
//   existSimpson 
//   ? res.status(200).json(existSimpson) 
//   : res.status(404).json({  message: 'simpson not found'})
// });

// exercicio 8 
app.post(
  '/simpsons',
  rescue(async (req, res) => {
    const { id, name } = req.body;

    const simpsons = await sgetSimpsons();

    if (simpsons.map(({ id }) => id).includes(id)) {
      return res.status(409).json({ message: 'id already exists' });
    }

    simpsons.push({ id, name });

    await setSimpsons(simpsons);

    res.status(204).end();
  })
);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
