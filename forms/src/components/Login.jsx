import { React,useState } from 'react'
import "../css/Login.css"
import logo from "../images/logo.png"
import { Paper,  Box, TextField, Button } from "@mui/material"
import Typography from "@mui/material/Typography";
import { useFormik } from 'formik';
import * as yup from "yup"
import { useNavigate } from 'react-router-dom';



const Login = () => {

  const navigate = useNavigate()
  const [role, setRole] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const resetErrorMessage = () => {
    setErrorMessage('');
};

  const formik = useFormik({
        initialValues: {
            FullName: "",
            Email: "",
            Password: "",
           
        },
        validationSchema: yup.object().shape({
            FullName: yup.string().required(),
            Email: yup.string().email().required(),
            Password: yup.string().required().min(8),
        }),
      onSubmit: async values => {
          
           try {
              const response = await fetch('http://localhost:5000/app/Login', {
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
               sessionStorage.setItem("FullName", data.FullName)
               sessionStorage.setItem("Email", data.Email)
               setRole(data.role);
                
               // Update the state with the user's full name and email
               formik.setFieldValue("FullName", data.fullName);
               formik.setFieldValue("Email", data.email);

                
               // Redirect the user to the appropriate page based on their role
               if (data.role === 'Student') {
                 navigate('/StudentsHome');
               } else if (data.role === 'Lecturer') {
                 navigate('/LecturerHome');
               } else {
                 setErrorMessage('Unknown user');
               }
                
             } else {
               const errorData = await response.json();
               if (errorData.message === 'Wrong email') {
                 setErrorMessage('Wrong email');
               } else if (errorData.message === 'Wrong full name') {
                 setErrorMessage('Wrong full name');
               } else if (errorData.message === 'Wrong password') {
                 setErrorMessage('Wrong password');
               } else {
                 setErrorMessage(`Login failed: ${errorData.message}`);
               }
             }  
            } catch (error) {
              console.error(error);
              setErrorMessage('Login failed');
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
        marginTop: {md: "3rem" ,xs:"3rem",sm:"3rem"},
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

                  {errorMessage && (
            <Typography
                sx={{ textAlign: "center", color: "brown", marginBottom: "16px" }}
                variant="body1"
            >
                {errorMessage}
            </Typography>
        )}

            <Box component="form" onSubmit={formik.handleSubmit} 
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
                      onChange={(e) => {
              formik.handleChange(e);
              resetErrorMessage();
          }}
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
                           onChange={(e) => {
              formik.handleChange(e);
              resetErrorMessage();
          }}
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
                           onChange={(e) => {
              formik.handleChange(e);
              resetErrorMessage();
          }}
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
                   "&:hover": { backgroundColor: "white" }
                  
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
