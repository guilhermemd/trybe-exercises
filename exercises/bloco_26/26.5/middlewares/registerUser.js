const { validateEmail, validatePassword, validateUsername } = require('../services/index');

const registerUser = (req, res) => {
  const { username, password, email } = req.body;
  const validateEmail2 = validateEmail(email);
  const validatePassword2 = validatePassword(password);
  const validateUsername2 = validateUsername(username)

  if(validateEmail2 !== 'OK') {
    return res.status(validateEmail2.status).json(validateEmail2.message)
  };

  if(validatePassword2 !== 'OK') {
    return res.status(validatePassword2.status).json(validatePassword2.message)
  };

  if(validateUsername2 !== 'OK') {
    return res.status(validateUsername2.status).json(validateUsername2.message)
  };

  if(validateUsername2 === 'OK' && validatePassword2 === 'OK' && validateEmail2 === 'OK') {
    res.status(201).json({ "message": "user created" })
  };
};

module.exports = registerUser;