const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Exercicio - 1: Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. 
// const addNewKey = (obj, key, value) => {
//   obj[key] = value;
// };

// addNewKey(lesson2, 'turno', 'manhã');

// console.log(lesson2);

//Exercício - 2: Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
// const listKeys = (obj) =>  Object.keys(obj);
// console.log(listKeys(lesson3));

//Exercício - 3: Crie uma função para mostrar o tamanho de um objeto.
// const objLength = (obj) =>  Object.keys(obj).length;
// console.log(objLength(lesson3));

//Exercício - 4:
const objValue = (obj) =>  Object.values(obj);
console.log(objValue(lesson2));