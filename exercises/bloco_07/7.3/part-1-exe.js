const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
// 1 - exercício: A função sum(a, b) retorna a soma do parâmetro a com o b
assert.strictEqual(typeof(sum), 'function');
