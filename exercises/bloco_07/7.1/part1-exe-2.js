// Copiar
//       const oddsAndEvens = [13, 3, 4, 10, 7, 2];

//       // Seu código aqui.

//       console.log(oddsAndEvens);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
  };
      

// console.log(bubbleSort(oddsAndEvens));

console.log(`Os números ${(bubbleSort(oddsAndEvens))} se encontram ordenados de forma crescente !`);


