/*Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if . */



function par(a, b, c) {
  
  if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
    return true;
  }
  else {
    return false;
  }
}
  console.log(par(2, 2, 3)); 