const {
  StatusCodes,
} = require('http-status-codes');

const {
  isNotValidFirstName,
  isNotValidLastName,
  isNotValidEmail,
  isNotValidPassword,
} = require('../helpers/utils');

const errorsMessages = {
  firstName_invalid: 'first name is not valid',
  lastName_invalid: 'last name is not valid',
  password_invalid: 'password is not valid',
  email_invalid: 'email is not valid',
};

const validation = (firstName, lastName, email, password) => {
  switch (true) {
    case isNotValidFirstName(firstName):
      return { code: StatusCodes.UNPROCESSABLE_ENTITY, message: errorsMessages.firstName_invalid };
    case isNotValidLastName(lastName):
      return { code: StatusCodes.UNPROCESSABLE_ENTITY, message: errorsMessages.lastName_invalid };
    case isNotValidEmail(email):
      return { code: StatusCodes.UNPROCESSABLE_ENTITY, message: errorsMessages.email_invalid };
    case isNotValidPassword(password):
      return { code: StatusCodes.UNPROCESSABLE_ENTITY, message: errorsMessages.password_invalid };
    default: return {};
  }
};

module.exports = validation;
