const states = document.getElementById('state');
function createStateOptions() {
  const stateOptions = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  let value = 1;
  for (let index = 0; index < stateOptions.length; index += 1) {
    const createOptions = document.createElement('option');
    states.appendChild(createOptions).innerText = stateOptions[index];
    states.appendChild(createOptions).value = stateOptions[index];
  }
}
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substr - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf - https://www.youtube.com/watch?v=e57ReoUn6kM
/*function validatingData(data) {
  if ((data.indexof('/') === 2) && (data.indexof('/') === 5)) {
    let day = data.substr(0,2);
    let month = data.substr(3,2);
    let year = data.substr(6,4);
    if (day > 0 && day < 32) && (month > 0 && month < 13) && (year > 0 && year.length === 4) {
      return true; 
    } 
  }
  return false;
}

function checkingData() {
  var dataPlace = document.getElementById('start-date');
  var dataNumbers = dataPlace.value;
  const callFunctionData = validatingData(data);
  if (!callFunction && data.length) {
    dataPlace.value = '';
    alert('data invalida');
    return false;
  }
  return callFunctionData;
}*/
