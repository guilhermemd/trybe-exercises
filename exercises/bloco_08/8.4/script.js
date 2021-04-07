
// const assert = require('assert');

// const arrays = [
//     ['1', '2', '3'],
//     [true],
//     [4, 5, 6],
// ];
// 1 - Dada uma matriz de matrizes, transforme em uma única matriz.

// function flatten() {
// return arrays.reduce((acc, arr) => acc.concat(arr), [])
// }

// assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

// 2 - Crie uma string com os nomes de todas as pessoas autoras.

const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// function allNames() {

//   return books.reduce((acc, book, index, array) => index === array.length - 1 ? acc + ` ${book.author.name}.` : acc + ` ${book.author.name},`, 'Nomes:');
// };

// console.log(allNames())

// assert.deepStrictEqual(allNames(), 'Nomes: George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.');

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

// const expectedResult = 43;

// function averageAge() {
//   const total = books.reduce((acc, book) => acc + (book.releaseYear - book.author.birthYear), 0);
//   return total / books.length;
// }
// console.log(averageAge());

// assert.strictEqual(averageAge(), expectedResult);

// 4 - Encontre o livro com o maior nome.
const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function longestNamedBook() {
  return books.reduce((acc, book) => book.name.length > acc.name.length ? book  : acc);
}

assert.deepStrictEqual(longestNamedBook(), expectedResult);
