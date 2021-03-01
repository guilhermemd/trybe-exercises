// 4 - Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

function findOutIfpositiveOrNegative (a) {
  if(a > 0) {
    return 'Número positivo.'
  }
  else if(a < 0) {
    return 'Número negativo.'
  }
  else {
    return 'Valor zero.'
  }
}

console.log(findOutIfpositiveOrNegative(-1));