const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');
const leArquivo = require('../texto.txt');

const CONTEUDO_DO_ARQUIVO = 'ok';

sinon.stub(fs, 'writefile').returns(CONTEUDO_DO_ARQUIVO);

// const verificaNum = require('../exercicio1.js');

// describe('Verifica se é um numero natural', () => {
//   it('e maior que zero', () => {
//     const resposta = verificaNum(4);

//     expect(resposta).to.be.equals('positivo');
//   });
// });

// describe('Verifica se é um numero natural', () => {
//   it('e menor que zero', () => {
//     const resposta = verificaNum(-1);

//     expect(resposta).to.be.equals('negativo');
//   });
// });

// describe('Verifica se é um numero natural', () => {
//   it('e igual a zero', () => {
//     const resposta = verificaNum(0);

//     expect(resposta).to.be.equals('neutro');
//   });
// });

// describe('Verifica se não é um número', () => {
//   it('deveria retornar uma string', () => {
//     const resposta = verificaNum('0');

//     expect(resposta).to.be.a('string');
//   })
// });

// describe('Verifica se não é um número', () => {
//   it('e o retorno deveria ser', () => {
//     const resposta = verificaNum('0');

//     expect(resposta).to.be.equals('o valor deve ser um número!');
//   });
// });

describe('Verifica o arquivo texto.txt', () => {
  const resposta = leArquivo('texto.txt');

  it('é uma string', () => {
    expect(resposta).to.be.a('string');
  });

  it('é igual ao conteúdo do arquivo', () => {
    expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);
  });
});