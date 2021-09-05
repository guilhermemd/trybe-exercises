const connection = require('./connection');

const createUser = async (firstName, lastName, email, password) => connection()
  .then((db) => db.collection('user').insertOne(
    {
      firstName, lastName, email, password,
    },
  ))
  .then((result) => ({
    id: result.insertedId, firstName, lastName, email,
  }));

const updateUser = async (firstName, lastName, email, password) => import('./connection').connection()
  .then((db) => db.collection('user').insertOne(
    {
      firstName, lastName, email, password,
    },
  ))
  .then((result) => console.log(({
    id: result.insertedId, firstName, lastName, email, password,
  })));

module.exports = {
  createUser,
  updateUser,
};
