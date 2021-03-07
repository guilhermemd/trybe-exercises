/* 1 -Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome("arara") ;
Retorno esperado: true
verificaPalindrome("desenvolvimento") ;
Retorno esperado: false */
 
function palindrome(word){ 
  var wordReversed = '';
  for (let index = word.length - 1; index >= 0; index -= 1) {
    wordReversed = wordReversed + word[index];
    }
    for (let index2 = 0; index2 < word.length; index2 += 1) {
      if (word[index2] === wordReversed[index2]){
        return true;
      }
      else {
        return false;
      }
    }
}
console.log(palindrome('arara'));