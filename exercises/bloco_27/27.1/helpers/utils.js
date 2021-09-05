const isNotValidFirstName = (firstName) => firstName === undefined
  || firstName === '' || !(/\D+/i.test(firstName));

const isNotValidLastName = (lastName) => lastName === undefined
  || lastName === '' || !(/\D+/i.test(lastName));

const isNotValidEmail = (email) => email === undefined
  || email === '' || !(/\w+@\w+.\D+/.test(email));

const isNotValidPassword = (password) => password === undefined
  || password === '' || password < 6;

module.exports = {
  isNotValidFirstName,
  isNotValidLastName,
  isNotValidEmail,
  isNotValidPassword,
};
