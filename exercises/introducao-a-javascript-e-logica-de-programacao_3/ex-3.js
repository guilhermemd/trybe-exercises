/* 3- Agora inverta o lado do triângulo. Por exemplo:
n = 5

    *
   **
  ***
 ****
*****

Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.
*/

var n = 5;
var symbol = '*';
var empty = '';
var helpCount = n;

for(var lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for(var numberColoum = 0; numberColoum < n; numberColoum += 1) {
      
      if(numberColoum > helpCount){
        empty = empty + ' ';
      }
      else {
        empty = empty + symbol;
      }
    }
    console.log(empty);
  empty = '';
  helpCount = helpCount - 1;
  }
  