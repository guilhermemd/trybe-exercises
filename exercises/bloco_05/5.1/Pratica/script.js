        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 1 - Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 2 - Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 3 - Crie uma função que mude a cor do quadrado vermelho para branco.
 4 - Crie uma função que corrija o texto da tag <h1>.
 5 - Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 6 - Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
      
// Exercício 1:
  function twoyearsTime() {
    document.getElementsByTagName('p')[1].innerText = 'Espero estar entendendo tudo que estou estudando.';
  }

// Exercício 2:
  function changeCollorOne() {
    document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';
  }

  //Exercício 3:
  function changeCollorTwo() {
    document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';
  }

  //Exercicio 4:
  function fixH1Up {
    document.getElementsByTagName('h1')[0].innerText = 'Corrige';
  }

  // Exercicio 5:
  function upperCase() {
    document.getElementsByTagName('p')[0] = document.getElementsByTagName('p')[0].innerText.toLocaleUpperCase();
  }

  // Exercicio 6:
  function showUpAllP() {
    let allPTags = document.getElementsByTagName('p');
    for (let index; index < allPTags.length; index += 1) {
      console.log(allPTags[index].innerHTML);
    }
  }