// const { readFile, writeFileSync } = require('fs');

// const readSimpsons = () => {
//   return readFile('./simpsons.json', 'utf-8').then(data => JSON.parse(data))
// };

// const writeSimpsons = (addSimpson) => {
//   let jsonData = JSON.stringify('./simpsons.json')
//   writeFileSync(addSimpson, jsonData)
// };

// module.exports = { readSimpsons, writeSimpsons };

const { readFile, writeFile } = require('fs').promises;

function getSimpsons () {
  return readFile('./simpsons.json', 'utf-8')
    .then(fileContent => JSON.parse(fileContent));
}

function setSimpsons (newSimpsons) {
  return writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}

module.exports = { getSimpsons, setSimpsons };
