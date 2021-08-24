const readline = require('readline-sync');

function IMC() {

  const altura =  readline.questionFloat('Qual a sua altura? 0.00');
  const peso = readline.questionInt('Qual o seu peso? 000');

  const alturaEmCm = altura / 100;
  const imc = peso / Math.pow(alturaEmCm, 2).toFixed(2);
  console.log(`Seu IMC é: ${imc}`);

  if(imc < 18.5) {
    console.log('Abaixo do peso (magreza)');
    return
  };

  if(imc >= 18.5  && imc <= 24.9) {
    console.log('Peso normal');
    return
  };

  if(imc >= 25.0 && imc <= 29.9) {
    console.log('Acima do peso (sobrepeso)');
    return
  };

  if(imc >= 30.0 && imc <= 34.9) {
    console.log('Obesidade grau I');
    return
  };

  if(imc >= 35.0  && imc <= 39.9) {
    console.log('Obesidade de grau II');
    return
  };

  console.log('Situação: Obesidade graus III e IV');
};

IMC();
