const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true
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
    Position: {
        type: String,
        required: true
    },
    Picture: {
        type: String,
        required: true
    },

    isLecturer: { type: Boolean, default: true },
    isStudent: { type: Boolean, default: false },
        
    },
    { timestamps: true });

module.exports = mongoose.model.Lecturer || mongoose.model("Lecturer", UserSchema);

