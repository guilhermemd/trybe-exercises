const { readFileSync } = require('fs');

let rawdata = readFileSync('./simpsons.json');
let simpsons = JSON.parse(rawdata);

const simpsonsPersons = () => {
  const nameSimpson = new Promise((resolve, reject) => { 
    const sim = simpsons.map(({id, name}) => `${id} - ${name}`)
    resolve(sim)
  })
  return nameSimpson
}

simpsonsPersons()
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message))