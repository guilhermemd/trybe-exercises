const state = document.getElementById('state');
function brazilianStates() {
  let states = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  
  for (let index = 0; index < states.length; index += 1) {
    const creatingOption = document.createElement('option');
    
    state.appendChild(creatingOption).innerHTML = states[index];
    state.appendChild(creatingOption).value = states[index];
  }
}

const state = document.getElementById('state');
function brazilianStates() {
  let states = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  
  for (let index = 0; index < states.length; index += 1) {
    const creatingOption = document.createElement('option');
    
    state.appendChild(creatingOption).innerHTML = states[index];
    state.appendChild(creatingOption).value = states[index];
  }
}