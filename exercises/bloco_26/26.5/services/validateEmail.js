const validateEmail = (email) => {
  const regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // const { email } = request.body;
  // const emailtoString = regex.test(String(email).toLowerCase());
  // !regex.test(email))
  (!email || email.length === 0 || regex.test(email) === false)
  ? { status: 400, message: "Incorrect e-mail" }
  : 'OK';
};

module.exports = validateEmail;