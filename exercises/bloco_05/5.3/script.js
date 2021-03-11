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

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function decemberDays() {
  let ulPosition = document.getElementById('days');

  for(let index = 0; index < dezDaysList.length; index += 1) {
    let creatingLi = document.createElement('li');
    let day = dezDaysList[index];

    if(day === 24 || day === 31){
      creatingLi.className = 'day holiday';
      creatingLi.innerHTML = day;
      ulPosition.appendChild(creatingLi);
    } else if (day === 25) {
      creatingLi.className = 'day holiday friday';
      crating.innerHTML = day;
      ulPosition.appendChild(creatingLi);
    } else if (day === 4 || day === 11 || day === 18) {
      creatingLi.className = 'day friday';
      creatingLi.innerHTML = day;
      ulPosition.appendChild(creatingLi);
    } else {
      creatingLi.className = 'day';
      creatingLi.innerHTML = day;
      ulPosition.appendChild(creatingLi);
    }
  };
};

decemberDays();

// Exercício 2: Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
/*function btnHoliday(buttonName) {
  let getLocalBtn = document.querySelector('.buttons-container');
  let creatBtnHoliday = document.createElement('button');
  let IdOnButton = 'btn-holiday';

  creatBtnHoliday.innerHTML = buttonName;
  creatBtnHoliday.id = IdOnButton;
  getLocalBtn.appendChild(creatBtnHoliday);
}

btnHoliday('Feriados') */