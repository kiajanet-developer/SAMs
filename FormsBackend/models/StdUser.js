const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true
    },
    RegNo: {
        type: String,
        required: true,
        unique: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    },
    Program: {
        type: String,
        required: true
    },
    Picture: {
        type: String,
        required: true
    },
    FingerPrint: {
        type: Number
        
    },
    isLecturer: { type: Boolean, default: false },
    isStudent: { type: Boolean, default: true },
    },
    { timestamps: true });

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);

