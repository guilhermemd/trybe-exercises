/* Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if . */ 
// TENTAR FAZER SOMENTO O UM IF!!! NÃO ESQUECE!

function impar(a, b, c){
  if (a % 2 === 1 || a % 2 === 1 || c % 2 === 1) {
    return true;
  }
  else {
    return false;
  }
}
console.log(impar(5, 3, 7));