const validateEmail = () => {
  const regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const { email } = request.body;
  // const emailtoString = regex.test(String(email).toLowerCase());
  if(!email || email.length === 0 || !regex.test(email)) {
    response.status(400).json({ "message": "invalid data" });
  };
  
  next();
};

module.exports = validateEmail;