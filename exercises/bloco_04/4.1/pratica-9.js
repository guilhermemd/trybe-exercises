/* 9 - Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if . */

var a = 5;
var b = 4;
var c = 3;

var resultado = false;

if (a % 2 === 1 || a % 2 === 1 || c % 2 === 1) {
  resultado = true;
}

console.log(resultado);