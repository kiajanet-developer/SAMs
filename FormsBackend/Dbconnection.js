const mongoose = require("mongoose")

// connect to database
require('dotenv').config()

const DBconnection = mongoose.connect(process.env.DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to MongoDB Atlas!'))
    .catch(err => {
        console.log("Unable to connect to MongoDB Atlas!")
        console.log(err)
    });

module.exports = {DBconnection}    