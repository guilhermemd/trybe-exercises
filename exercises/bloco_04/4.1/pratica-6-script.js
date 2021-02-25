var chess = 'Rainha'; //Guilherme do futuro - observe que o R é maiusculo e mesmo assim pego

switch (chess.toLocaleLowerCase()) {
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