const validatePassoword = (passoword) => {
  const passwordRegex = /^[0-9]*$/;

  (passoword < 4 || passoword > 8 || password.match(passwordRegex) === false) 
  ? { status: 400, message: "Incorrect password" }
  : 'OK';

};

module.exports = validatePassoword;
