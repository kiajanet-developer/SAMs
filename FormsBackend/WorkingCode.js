const express = require("express");
const LoginRouter = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
const User = require("../models/StdUser");

const secretKey = '9aaf1426a254995dee18089ba6a64e60028fd832d75bc0236f5ae4d3d3ec359470bbf69c7c697c2eaa2a29ad2de7cb39ef41050a9ebd0e10e9b9e93aa188601a';

// validation rules for StdsignIn
const StdsignInValidationRules = [
    body('FullName').notEmpty(),
    body('Email').isEmail(),
    body('Password').notEmpty(),
];

// handle StdsignIn request
LoginRouter.post('/StdLogin', StdsignInValidationRules, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { FullName, Email, Password } = req.body;

    // find user by FullName and email
    const user = await User.findOne({ FullName, Email });

    // check if user exists and password is correct
    if (!user || !bcrypt.compareSync(Password, user.Password)) {
      return res.status(401).json({ message:'Invalid credentials' });
    }

    // generate JWT token with userId as payload
   const token = jwt.sign({ userId: user._id }, secretKey); // use the generated secret key

    res.status(200).json({
        message: 'Login Successful',
        token: token
    });
  } catch (err) {
      console.log(err); // added console.log to see the actual error message
      res.status(500).json({ message: 'Login Fail' });
  }
});

module.exports = LoginRouter;





import React from 'react'
import "../css/Login.css"
import logo from "../images/logo.png"
import { Paper,  Box, TextField, Button } from "@mui/material"
import Typography from "@mui/material/Typography";
import { useFormik } from 'formik';
import * as yup from "yup"
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            FullName: "",
            Email: "",
            Password:"",
        },
        validationSchema: yup.object().shape({
            FullName: yup.string().required(),
            Email: yup.string().email().required(),
            Password: yup.string().required().min(8),
        }),
      onSubmit: async values => {
          
           try {
              const response = await fetch('http://localhost:5000/app/StdLogin', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
              });

              if (response.ok) {
                const data = await response.json();
                // Save the token in local storage
                localStorage.setItem('token', data.token);
                // Redirect the user to the protected route
                navigate('/StudentsHome');
              } else {
                const error = await response.text();
                alert(`Login failed: ${error}`);
              }
            } catch (error) {
              console.error(error);
            }
        }
    })

  return (
    <Paper elevation={12} spacing ="2" 
      sx={{
        padding: "10px",
        width: { xs: "90%",sm:"80%" ,md:"70%",lg:"60%",xl:"65%"},
        margin: "auto",
        alignItems: "center",
        marginTop: {md: "1rem" ,xs:"5rem",sm:"2rem"},
        overflow: "hidden"
      }}>
      <Typography sx={{ textAlign: "center",color: "#000" }}
               variant="h6" className='title'>
              <p>WEB BASED STUDENTs ATTENDENCE MANAGEMENT SYSTEM</p>
            </Typography>
      <Box className= "Container">
     
        <Paper elevation={12}
              sx={{
                backgroundColor: "#060A5A",
               width:"70%"
          }}>
          
          <Box className= "LoginContainer"> 
            <Typography sx={{ textAlign: "center", paddingTop:"10px",color: "#fff" }}
              component="h1" variant="h6">
                SIGN IN
            </Typography>

            <Box component="form" onSubmit={formik.handleSubmit} noValidate
              sx={{ mt: 2, display: "flex", flexDirection: "column", alignItems: "center",gap:"10px" }}>
              <TextField
                  size='small'
                  margin="normal"
                  variant='standard'
                  required
                  id="FullName"
                  label="Full Name"
                  name="FullName"
                sx={{
                  width: "85%", backgroundColor: "#fff",
                '& .MuiInput-underline:before': { borderBottomColor: '#000' },
                  '& .MuiInput-underline:after': { borderBottomColor: '#000' }
                  
                }}
                
                InputLabelProps={{
                  sx: {
                    color: '#000',
                    fontSize: '12px',
                    padding: "10px",
                    
                  }
                    }}
                    inputProps={{
                      sx: {
                        color: '#000',
                        padding: "10px",
                        height: "10px",
                       
                      }
                    }}
                 {...formik.getFieldProps('FullName')}
            />
            {formik.touched.FullName && formik.errors.FullName ? (
                            <div style={{ color: 'brown', alignSelf: "start", marginLeft: "7.5%" }}
                                sx={{ marginTop: '5px', }}>{formik.errors.FullName}</div>
                        ) : null}              
                           
              <TextField
                margin="normal"
                variant='standard'
                  required
                  id="Email"
                  label="Email Address"
                  name="Email"
                sx={{
                  width: "85%", backgroundColor: "#fff",
                '& .MuiInput-underline:before': { borderBottomColor: 'black' },
                  '& .MuiInput-underline:after': { borderBottomColor: 'black' }
                  
                }}
                InputLabelProps={{
                  sx: {
                    color: '#000',
                    fontSize: '12px',
                    padding:"10px",
                  }
                }}
                inputProps={{
                  sx: {
                    color: '#000',
                    padding: "10px",
                    height: "10px",
                     borderRadius:"15px"
                  }
                }}
            {...formik.getFieldProps('Email')}
        />

    {formik.touched.Email && formik.errors.Email ? (
    <div style={{ color: 'brown', alignSelf: "start", marginLeft: "7.5%" }}
        sx={{ marginTop: '5px', }}>{formik.errors.Email}</div>
) : null}

                          
                <TextField
                margin="normal"
                variant='standard'
                required
                name="Password"
                label="Password"
                type="password"
                id="Password"
                sx={{
                  width: "85%",backgroundColor: "#fff",
                '& .MuiInput-underline:before': { borderBottomColor: 'white' },
                  '& .MuiInput-underline:after': { borderBottomColor: 'white' },
                   
                  
                }}
                InputLabelProps={{
                  sx: {
                    color: '#000',
                    fontSize: '12px',
                    padding: "10px",
                    
                  }
                }}
                inputProps={{
                  sx: {
                    color: '#000',
                    padding: "10px",
                    height:"10px"
                  }
                }}
        {...formik.getFieldProps('Password')}
        />
        {formik.touched.Password && formik.errors.Password ? (
        <div style={{ color: 'brown', alignSelf: "start", marginLeft: "7.5%" }}
            sx={{ marginTop: '5px', }}>{formik.errors.Password}</div>
    ) : null}   

                <Button
                  type="submit"
                  variant="contained"
                sx={{
                  mt: 3, mb: 2,
                  width: "35%", fontSize: {md: "1.2em",xs:"1em"}, backgroundColor: "#fff", color: "#000",
                  
                  
                }}
                >
                 LOGIN
              </Button>
            </Box>
          </Box>
         </Paper>
        
          <Box className = "sideBarContainer">
            <img className='logo' src={logo} alt="nonet Logo" />
            <Box className="Sams">
              <p>
                Welcome to SAMS
              </p>
            </Box>
        </Box>

      </Box>     
    </Paper>
  )
}

export default Login
