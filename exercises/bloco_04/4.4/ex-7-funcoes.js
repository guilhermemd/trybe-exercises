function gradeInLetters (nota){ 
  if (nota > 100 || nota < 0){
    return 'Erro! Valor incorreto. Insira um valor entre 100 e 0!';
  }
  else if (nota >= 90) {
    return 'A';
  }
  else if (nota >= 80) {
    return 'B';
  } 
  else if (nota >= 70) {
    return 'C';
  }
  else if (nota >= 60) {
    return 'D';
  }
  else if (nota >= 50) {
    return 'E';
  }
  else {
    return 'F';
  }
}  

console.log(gradeInLetters(100))