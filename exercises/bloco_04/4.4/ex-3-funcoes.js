// 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

function whichIsBigger(num1, num2, num3) {
  if(num1 > num2 && num1 > num3) {
    return 'O num1 é o maior número.'
  }
  else if(num2 > num1 && num2 > num3) {
    return 'O num2 é o maior número.'
  }
  else {
    return 'O num3 é o maior número.'
  }
}  

console.log(whichIsBigger(1, 2, 3));