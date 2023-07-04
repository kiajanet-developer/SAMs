const express = require("express");
const LoginRouter = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
const Student = require('../models/StdUser')
const Lecturer = require('../models/LecturerUser')


const secretKey = '9aaf1426a254995dee18089ba6a64e60028fd832d75bc0236f5ae4d3d3ec359470bbf69c7c697c2eaa2a29ad2de7cb39ef41050a9ebd0e10e9b9e93aa188601a';

// validation rules for StdsignIn
const StdsignInValidationRules = [
    body('FullName').notEmpty(),
    body('Email').isEmail(),
    body('Password').notEmpty(),
];

// handle StdsignIn request
LoginRouter.post('/Login', StdsignInValidationRules, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => {
          return { field: error.param, message: error.msg };
        });
        return res.status(422).json({ errors: errorMessages });
      }


    const { FullName, Email, Password } = req.body;

    // find Student by FullName and email
    let user = await Student.findOne({ FullName, Email });

    // if user not found in students, try finding in lecturers
    if (!user) {
        user = await Lecturer.findOne({ FullName, Email });
    }

    // check if user exists and password is correct
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (!bcrypt.compareSync(Password, user.Password)) {
      return res.status(401).json({ message: 'Wrong password' });
    }

    // determine user role based on user's properties
    let role = "";
    if (user.isLecturer) {
        role = "Lecturer";
    } else if (user.isStudent) {
        role = "Student";
    } else {
        return res.status(401).json({ message:'Unknown user' });
    }

    // generate JWT token with userId as payload
    const token = jwt.sign({ userId: user._id ,role }, secretKey); 

    res.status(200).json({
        message: 'Login Successful',
        token: token,
        role: role, // send the user's role to the client
        FullName: user.FullName,
        Email : user.Email,
    });
  } catch (err) {
      res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = LoginRouter;