const mongoose = require("mongoose");
const fp = new mongoose.Schema({
    Fingerprint: String
})

module.exports = mongoose.model.fingerprints || mongoose.model("fingerprints", UserSchema);
