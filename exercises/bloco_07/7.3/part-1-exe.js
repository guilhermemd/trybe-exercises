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
assert.strictEqual(sum(4,5), 9, 'O resultado deve ser 9');