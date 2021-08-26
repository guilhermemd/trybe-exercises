const { readFileSync } = require('fs');

let rawdata = readFileSync('./simpsons.json');
let simpsons = JSON.parse(rawdata);

const simpsonsPersons = (id) => {
  const simpsonPromise = new Promise((resolve, reject) => { 
    simpsons.some((item) => id === Number(item.id))
    ? resolve(simpsons.find((item) => id === Number(item.id)))
    : reject(new Error(`id não encontrado`))
  })
  return simpsonPromise
}

simpsonsPersons(8)
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message))