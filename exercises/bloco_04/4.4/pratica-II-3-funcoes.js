/* 3-  Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 . */

function whichIsSmaller(numbers){
  var smaller = 999999999999;
  for (let key in numbers) {
    if (smaller > numbers[key]){
      smaller = numbers[key];
    }
  }
  return smaller; 
}
console.log(whichIsSmaller([2, 4, 6, 7, 10, 0, -3]));