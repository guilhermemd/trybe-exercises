// 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let compara = 100 ** 100; 

for (let i = 0; i < numbers.length; i += 1){
  if (numbers[i] < compara){
    compara = numbers[i];
  }
}
console.log(compara);
