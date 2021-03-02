/* 5 - Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo. */



function angOfTriangle(angA, angB, angC) {

  if (angA + angB + angC === 180) {
   return true;
  }
  else {
  return false;
  }
}
console.log(angOfTriangle(100, 20, 61));
