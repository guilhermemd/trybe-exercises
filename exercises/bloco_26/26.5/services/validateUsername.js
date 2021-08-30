const validateUsername = () => {
  const { username } = request.body;

  if(!username || username < 3) {
    return response.status(400).json({ "message": "invalid data" });
  };

  next();
};

module.exports = validateUsername;