const express = require('express');
const userRouter = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const User = require('../models/User');


let nextUserId = 1; // Simulating auto-increment

// Register
userRouter.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    let existingUser = User.getUserByUsername(username);
    if (existingUser) {
      return res.status(400).json({ msg: 'Username already exists' });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User(nextUserId++, username, hashedPassword, 'user');
    User.addUser(newUser);
    const payload = { user: { id: newUser.id } };
    jwt.sign(payload, 'masai', { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Login
userRouter.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    let user = User.getUserByUsername(username);
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }
    const payload = { user: { id: user.id } };
    jwt.sign(payload, 'masai', { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = userRouter;
