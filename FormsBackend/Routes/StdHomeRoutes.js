const express = require("express");
const HomeRouter = express.Router();
const User = require("../models/StdUser");
const verifyToken = require('./Auth'); // import the verifyToken middleware

HomeRouter.get('/StudentsHome', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    res.status(200).json({ message: `Welcome ${user.FullName}!` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = HomeRouter;