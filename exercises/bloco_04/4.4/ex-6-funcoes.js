/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop -> diagonals */


function chessGame()
switch (chessGame.toLocaleLowerCase()) { // o erro tá aqui
  case 'rei':
    console.log('O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.');
    break;

  case 'rainha':
    console.log('A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.');
    break;  
  
  case 'bispo':
    console.log('O bispo move-se ao longo da diagonal. Não pode pular outras peças.');
    break;
   
  default:
    console.log('Peça não reconhecida');
    break;  
}

chessGame('rainha');

console.log(chessGame);