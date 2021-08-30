const validatePassoword = () => {
  const { passoword } = request.body;
  const passwordRegex = /^[0-9]*$/;

  if(passoword < 4 || passoword > 8 || !password.match(passwordRegex)) {
    return response.status(400).json({ "message": "invalid data" });
  }

  next();
};

module.exports = validatePassoword;