//  1 -Exercício Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respctivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
const register = (name) => {
  return {
    name, 
    email:`${name.replace(' ', '_').toLocaleLowerCase()}@trybe.com`}
}

const newEmployees = () => {
  const employees = {
    id1: register('João Silva'),
    id2: register('Maria Rocha'),
  }
  return employees;
};

console.log(newEmployees());

// Exercício 2
// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const result = (number, resultChecker) => {
  const randomNumber = Math.ceil(Math.random() * 5);
  return resultChecker(number, randomNumber);
}

const resultChecker = (number,randomNumber ) => {
  if(number === randomNumber) {
    return "Parabéns você ganhou";
  } else {
    return "Tente novamente";
  }
}

console.log(resultChecker(1));

// Exercício 3
// Crie uma HOF utilizando o conceito de currying . Passe como parâmetros a resposta correta (Ex: Gabarito) para uma pergunta e uma resposta a ser validada (Ex: Resposta de uma pessoa). Sua HOF deve checar se a resposta enviada pela pessoa usuária é correta. Se for, a função retorna true , se não for, a função retorna false .
// A validação da resposta não deve ser case sensitive.
// Deve ser possível chamar a HOF criada de forma encadeada (Ex: checarResposta('Gabarito')('Teste'))

const CORRECT_ANSWER = 'higher order function';
const USER_ANSWER = 'HIGHER ORDER FUNCTION';

const checkAnswer2 = (correctAnswer) => (userAnswer) => correctAnswer === userAnswer.toLowerCase();

console.log(checkAnswer2(CORRECT_ANSWER)(USER_ANSWER));