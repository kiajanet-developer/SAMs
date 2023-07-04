const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000
const StdRoutes = require("./Routes/StdAuth")
const trydbrouter = require("./Routes/trydb")
const LectRoutes = require("./Routes/LecturerAuth")
const LoginRoutes = require("./Routes/LoginRoutes")
const HomeRoutes = require("./Routes/StdHomeRoutes")
const cors = require("cors")
const DBconnection = require("./Dbconnection")


DBconnection;
// parse incoming requests with JSON payloads

app.use(cors())
app.use(express.json())

// authentication routes
app.use('/app', StdRoutes);
app.use('/app', trydbrouter);
app.use('/app', LectRoutes);
app.use('/app', LoginRoutes);
app.use('/app', HomeRoutes);


app.listen(PORT,(req,res)=>{
    console.log(`Server Listening on Port ${PORT}`)
})
