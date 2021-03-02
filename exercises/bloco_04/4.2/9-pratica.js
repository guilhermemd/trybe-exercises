// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let a = [];
let aDivididoPorDois = [];

for (let b = 0; b < 26; b += 1 ) {
  a.push(b)
}

for (let i = 0; i < a.length; i += 1){
  aDivididoPorDois.push(a[i] / 2);
}

console.log(aDivididoPorDois);