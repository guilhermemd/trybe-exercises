// 2 - Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;

for (var i = 0; i < numbers.length; i += 1) {
  somaNumbers += numbers[i]
}

console.log(somaNumbers);