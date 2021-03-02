
var word = 'carro';
var wordReversed = '';
for (let index = word.length - 1; index >= 0; index -= 1) {
   wordReversed = wordReversed + word[index];
}
console.log(wordReversed);