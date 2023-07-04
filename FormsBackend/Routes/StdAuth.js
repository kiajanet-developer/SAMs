const express = require("express");
const stdrouter = express.Router();
const multer = require("multer");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const User = require("../models/StdUser");

// set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

//creating the multer middleware
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 } // set limit to 5MB
});

// validation rules for StdsignUp
const StdsignUpValidationRules = [
  body('FullName').notEmpty(),
  body('RegNo').notEmpty(),
  body('Email').isEmail(),
  body('Password').isLength({ min: 8 }),
  body('Program').notEmpty(),
];

//register endpoint
stdrouter.post("/StdRegister", upload.fields([{ name: 'Picture', maxCount: 1 },
{ name: 'FingerPrint', maxCount: 1 }]), StdsignUpValidationRules, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    const { FullName, RegNo, Email, Password, Program } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ $or: [{ Email }, { RegNo }] });
    if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(Password, 10);

    // create new user object
    const user = new User({
        FullName,
        RegNo,
        Email,
        Password: hashedPassword,
        Program,
        Picture: req.files['Picture'][0].filename,
        FingerPrint: req.files['FingerPrint'][0].filename
    });

    // save user to database
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error registering user' });
  }
});

module.exports = stdrouter;