
//Exercicio 1 - erro - só vai até o dia 24 no calendário
function decemberDays() {
  let ulPosition = document.querySelector('#days');

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

// exercio 2 - com erro

function btnHoliday(buttonName) {
  let btnContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonId = 'btn-holiday';

  btnContainer.innerHTML = buttonName;
  newButton.id = newButtonId;
  btnContainer.appendChild(newButton);
};

btnHoliday('Feriados');
