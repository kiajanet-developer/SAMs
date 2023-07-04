const express = require("express");
const Lectrouter = express.Router();
const multer = require("multer");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const User = require("../models/LecturerUser");

// set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'LecturerImages/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

//creating the multer middleware
const Lectupload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 } // set limit to 5MB
});

// validation rules for LecturersignUp
const LectsignUpValidationRules = [
  body('FullName').notEmpty(),
  body('Email').isEmail(),
  body('Password').isLength({ min: 8 }),
  body('Position').notEmpty(),
];

//register endpoint
Lectrouter.post("/LecturerRegister", Lectupload.fields([{
    name: 'Picture', maxCount: 1
},]), LectsignUpValidationRules,
async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    const { FullName, Email, Password, Position } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ $or: [{ Email }, { FullName }] });
    if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(Password, 10);

    // create new user object
    const user = new User({
        FullName,
        Email,
        Password: hashedPassword,
        Position,
        Picture: req.files['Picture'][0].filename,
        
    });

    // save user to database
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error registering user' });
  }
});

module.exports = Lectrouter;