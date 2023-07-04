const express = require("express")
const fprouter = express.Router();
const fp = require("../models/fingerprint");

fprouter.post("/fingerprintdata", (req, res) => {
    const finger = new fp({
        Fingerprint
    });
    finger.save();
    res.status(201).json({ message: 'Fingerprint sent successfully' });
}) 

module.exports = fprouter;