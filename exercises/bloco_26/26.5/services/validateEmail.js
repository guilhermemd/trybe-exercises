const validateEmail = (email) => {
  const regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // const { email } = request.body;
  // const emailtoString = regex.test(String(email).toLowerCase());
  // !regex.test(email))
  if(!email || email.length === 0 || regex.test(email) === false) {
    return { status: 400, message: "Incorrect e-mail" }
  }
  return 'OK';
};

module.exports = validateEmail;