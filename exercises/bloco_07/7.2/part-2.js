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

//Exercicio - 1 
// const addNewKey = (obj, key, value) => {
//   obj[key] = value;
// };

// addNewKey(lesson2, 'turno', 'manhã');

// console.log(lesson2);

//Exercício - 2
const listKeys = (obj) =>  Object.keys(obj);
console.log(listKeys(lesson3));