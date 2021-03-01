// 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

function whichIsBigger(a, b) {
  if (a > b){
    return console.log('A var a é maior que a var b');
  }
  else {  
    return console.log('A var b é maior que a var a');
  };
}

whichIsBigger(7, 4);