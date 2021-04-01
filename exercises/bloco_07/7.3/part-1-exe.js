const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
// 1 - exercício: A função sum(a, b) retorna a soma do parâmetro a com o b
// assert.strictEqual(typeof(sum), 'function', 'Devo esperar uma função');
// 2 - exercício: Teste se o retorno de sum(4, 5) é 9
// assert.strictEqual(sum(4,5), 9, 'O resultado deve ser 9');

// 3 - exercício: Teste se o retorno de sum(0, 0) é 0
// assert.strictEqual(sum(0,0), 0, 'O resultado deve ser 0');

// 4 - exercício: Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
assert.throw(sum(4, '5'), 'Deveria lançar um Error');

// 5 - exercício: Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
assert.throw(sum(4, '5'), 'Deveria lançar um Error');
// assert.throws(() => {
//   sum(4, '5');
// });
