// 1 - Inicie os exercícios criando uma aplicação Node.js com os comandos já aprendidos.
// Crie uma rota GET /ping
// Sua rota deve retornar o seguinte JSON: { message: 'pong' }

// 2 - Crie uma rota POST /hello
// Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
// Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } .

// 3 - Crie uma rota POST /greetings
// Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> } .
// Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK .
// Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized .

// 4 - Crie uma rota PUT /users/:name/:age .
// Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" } .

// const express = require('express');
// const app = express();

const app = require('express')(); //Dica do Rafa

const bodyParser = require('body-parser');

app.use(bodyParser.json());

//exercicio 1
app.get('/ping', (_req, res) => 
  res.status(200).json( { message: 'pong' } ) 
) ;

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

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
