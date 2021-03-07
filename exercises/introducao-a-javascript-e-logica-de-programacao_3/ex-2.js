/* 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

n = 5

*
**
***
****
*****

*/

let n = 5;
let asterico = ('*');
let linhas = ('');

for (let indexDeAsterisco = 0; indexDeAsterisco < n; indexDeAsterisco += 1) {
  linhas = linhas + asterico;
  console.log(linhas);
}