// 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

function whichIsBigger(a, b) {
  if (a > b) {
    return 'A var a é maior que a var b';
  }
  else {  
    return 'A var b é maior que a var a';
  };
}

console.log(whichIsBigger(7, 4));