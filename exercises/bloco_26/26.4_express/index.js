// 1 - Inicie os exercícios criando uma aplicação Node.js com os comandos já aprendidos.
// Crie uma rota GET /ping
// Sua rota deve retornar o seguinte JSON: { message: 'pong' }

// 2 - Crie uma rota POST /hello
// Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
// Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } .

// const express = require('express');
// const app = express();

const app = require('express')(); //Dica do Rafa

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/ping', handleHelloWorldRequest); 

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3

function handleHelloWorldRequest(_req, res) {
  res.status(200).json( { message: 'pong' } ); 
}

// exercicio 2
app.post('/hello', function (req, res) {
  const { nomeUsuario } = req.body;
  res.status(200).json( { message: `Hello, ${nomeUsuario}` })
});