/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 .
*/

function whichIsBigger(numbers){
  var bigger = 0;
  for (let key in numbers) {
    if (bigger < numbers[key]){
      bigger = numbers[key];
    }
  }
  return bigger; // Guilherme do futuro. Repare que o retur tem de estar for dos laços para poder terminar as voltas das key ;;) 
}
console.log(whichIsBigger([2, 3, 6, 7, 10, 1]));