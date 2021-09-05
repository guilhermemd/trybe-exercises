const express = require('express');

const router = express.Router();

const {
  StatusCodes,
} = require('http-status-codes');

const validationStatus = require('../middlewares/validationStatus');
const User = require('../models/userModel');

router.post('/', validationStatus, async (req, res) => {
  const {
    firstName, lastName, email, password,
  } = req.body;
  const userRegister = await User
    .createUser(firstName, lastName, email, password)
    .catch((err) => console.log(err));

  if (!userRegister) return res.status(StatusCodes.PRECONDITION_FAILED).json({ mensage: 'usuario não registrado' });

  return res.status(200).json(userRegister);
});

module.exports = router;
