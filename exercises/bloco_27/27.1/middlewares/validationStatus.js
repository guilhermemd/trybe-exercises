const validation = require('../validations/validation');

const validationStatus = (req, res, next) => {
  const {
    firstName, lastName, email, password,
  } = req.body;
  const { code, message } = validation(firstName, lastName, email, password);
  if (code) {
    return res.status(code).json({ message });
  }
  return next();
};

module.exports = validationStatus;
