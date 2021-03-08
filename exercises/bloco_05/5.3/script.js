function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercício 1: Mês dezembro com seus feriados

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function decemberDays() {
  for(let index of dezDaysList) {
    let getPosition = document.getElementById('days');
    let creatingLi = document.createElement('li');
    let day = dezDaysList[index];
    if(day === 24 || day === 31){
      getPosition.className = 'day holiday';
      creatingLi.innerHTML = day;
      getPosition.appendChild(createLi);
    }
  }
}

// Exercício 2: Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
function btnHoliday {
  let getLocalBtn = document.querySelector('.buttons-container');
  let crearBtnHoliday = document.createElement('button');
  
}