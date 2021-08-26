const { expect } = require('chai');

const verificaNum = require('../exercicio1.js');

describe('Verifica se é um numero natural', () => {
  it('e maior que zero', () => {
    const resposta = verificaNum(4);

    expect(resposta).to.be.equals('positivo');
  });
});

describe('Verifica se é um numero natural', () => {
  it('e menor que zero', () => {
    const resposta = verificaNum(-1);

    expect(resposta).to.be.equals('negativo');
  });
});

describe('Verifica se é um numero natural', () => {
  it('e igual a zero', () => {
    const resposta = verificaNum(0);

    expect(resposta).to.be.equals('neutro');
  });
});

describe('Verifica se não é um número', () => {
  it('deveria retornar uma string', () => {
    const resposta = verificaNum('0');

    expect(resposta).to.be.a('string');
  })
});

describe('Verifica se não é um número', () => {
  it('e o retorno deveria ser', () => {
    const resposta = verificaNum('0');

    expect(resposta).to.be.equals('o valor deve ser um número!');
  });
});