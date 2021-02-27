/* 8 - Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false . */

var a = 5;
var b = 4;
var c = 3;

if (a % 2 ===0 || b % 2 === 0 || c % 2 === 0){
  resultado = true;
}
else {
  resultado = false;
}

console.log(resultado);