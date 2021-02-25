// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;

for (numebersIndex = 0; numebersIndex < numbers.length; numebersIndex += 1){
  if (numbers[numebersIndex] % 2 === 1) {
    impar += 1;
  }
}

console.log(impar);