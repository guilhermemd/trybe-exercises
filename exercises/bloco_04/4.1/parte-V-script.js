status = 'Aprovado';

switch (status) {
  case 'Aprovado':
    console.log('Parabéns, você foi aprovado!');
    break;

  case 'lista':
    console.log('Você está na nossa lista de espera');
    break;

  case 'reprovado':
    console.log('Você foi reprovada');
    break;
    
  default:
    console.log('Não se aplica');  
}
