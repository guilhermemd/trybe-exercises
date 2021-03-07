/* 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
n = 5

*****
*****
*****
*****
*****


*/

let n = 5;
let asterico = ('*');
let linhas = ('');

for (let indexDeAsterisco = 0; indexDeAsterisco < n; indexDeAsterisco += 1) {
  linhas = linhas + asterico;
}
for (let indexDeLinhas = 0; indexDeLinhas < n; indexDeLinhas += 1) {
  console.log(linhas);
}

