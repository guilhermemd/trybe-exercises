const validateUsername = (username) => {
  (!username || username < 3)
  ? { status: 400, message: "Incorrect user name" }
  : 'OK';
};

module.exports = validateUsername;