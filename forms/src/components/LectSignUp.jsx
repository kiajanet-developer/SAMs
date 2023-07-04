import { React, useState } from 'react'
import * as yup from 'yup'
import { TextField, Paper, Button } from '@mui/material'
import { useFormik } from 'formik'
import "../index.css"

const LectSignUp = () => {
    const formik = useFormik({
        initialValues: {
            FullName: "",
            Email: "",
            Password: "",
            Position: "",
            Picture: null
           
        },
        validationSchema: yup.object().shape({
            FullName: yup.string().required(),
            Email: yup.string().email().required(),
            Password: yup.string().required().min(8),
            Position: yup.string().required(),
            Picture: yup
                .mixed()
                .required('File is required'),
        }),
        onSubmit: async(values) => {
             const formData = new FormData();

                // Append form data to the FormData object
                formData.append('FullName', values.FullName);
                formData.append('Email', values.Email);
                formData.append('Password', values.Password);
                formData.append('Position', values.Position);
                formData.append('Picture', values.Picture);
               

                // Send the FormData object to the server using fetch
                const response = await fetch('http://localhost:5000/app/LecturerRegister', {
                    method: 'POST',
                    body: formData
                });

                if (response.ok) {
                    alert('Registration successful');
                } else {
                    const error = await response.text();
                    alert(`Registration failed: ${error}`);
                }
        },
                        
    })

    const [pictureFile, setPictureFile] = useState(null);
    const handlePictureChange = (event) => {
        const file = event.currentTarget.files[0];
        setPictureFile(file);
        formik.setFieldValue('Picture', file); // pass the file object to setFieldValue
    };

  return (
    <Paper
      elevation={12}
      spacing="2"
      sx={{
        padding: '20px',
        width: {
          xs: '85%',
          sm: '75%',
          md: '80%',
          lg: '80%',
          xl: '80%',
        },
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        margin: 'auto',
        backgroundColor: '#E7DFDF',
        marginTop: { md: '2rem', xs: '2rem', sm: '2rem' },
        overflow: 'hidden',
        height:"85vh"
        
       
      }}
      >
        <Paper
                elevation={12}
                spacing="2"
                sx={{
                width: {
                    xs: '90%',
                    sm: '85%',
                    md: '75%',
                    lg: '80%',
                    xl: '80%',
                },
                display: 'flex',
                flexDirection: "column",
                gap:"10px",
                justifyContent:"center",
                margin: 'auto',
                backgroundColor: '#060A5A',
                alignItems: 'center',
                textAlign: "left",
                height:"100%"
                
                }}
          >
        
                <h2>Register Lecturer's Details</h2>

       <form onSubmit={formik.handleSubmit} className='container'>
             <TextField
                            type="text"
                            label="Full Name"
                            name='FullName'
                            variant="standard"
                            margin="normal"
                            sx={{
                                width: "85%", backgroundColor: "#fff",
                                '& .MuiInput name="FullName"-underline:before': { borderBottomColor: '#000' },
                                '& .MuiInput-underline:after': { borderBottomColor: '#000' },
                                marginTop: '5px',
                  
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
                            type="email"
                            label="Email"
                            name='Email'
                            variant="standard"
                            margin="normal"
                            sx={{
                                width: "85%", backgroundColor: "#fff",
                                '& .MuiInput name="Email"-underline:before': { borderBottomColor: '#000' },
                                '& .MuiInput-underline:after': { borderBottomColor: '#000' },
                                marginTop: '5px',
                  
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
                            {...formik.getFieldProps('Email')}
                        />
                        {formik.touched.Email && formik.errors.Email ? (
                            <div style={{ color: 'brown', alignSelf: "start", marginLeft: "7.5%" }}
                                sx={{ marginTop: '5px', }}>{formik.errors.Email}</div>
                        ) : null}
       
            <TextField
                type="password"
                label="Password"
                name='Password'
                variant="standard"
                margin="normal"
                sx={{
                    width: "85%", backgroundColor: "#fff",
                    '& .MuiInput name="Password"-underline:before': { borderBottomColor: '#000' },
                    '& .MuiInput-underline:after': { borderBottomColor: '#000' },
                    marginTop: '5px',
        
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
                {...formik.getFieldProps('Password')}
            />
            {formik.touched.Password && formik.errors.Password ? (
                <div style={{ color: 'brown', alignSelf: "start", marginLeft: "7.5%" }}
                    sx={{ marginTop: '5px', }}>{formik.errors.Password}</div>
                  ) : null}

            <TextField
                            type="text"
                            label="Position"
                            name='Position'
                            variant="standard"
                            margin="normal"
                            sx={{
                                width: "85%", backgroundColor: "#fff",
                                '& .MuiInput name="Position"-underline:before': { borderBottomColor: '#000' },
                                '& .MuiInput-underline:after': { borderBottomColor: '#000' },
                                marginTop: '5px',
                  
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
                            {...formik.getFieldProps('Position')}
                        />
                        {formik.touched.Position && formik.errors.Position ? (
                            <div style={{ color: 'brown', alignSelf: "start", marginLeft: "7.5%" }}
                                sx={{ marginTop: '5px', }}>{formik.errors.Position}</div>
                        ) : null}

                        <div className='picButton' onClick={() => {
                            document.getElementById("Picture").click()
                        }}>
                            <input
                                type="file"
                                name="Picture"
                                id="Picture"
                                accept="image/*"
                                style={{ display: "none" }}
                                onChange={handlePictureChange}
                            />
                            <div>
                                {pictureFile ? (
                                    <p>{pictureFile.name}</p>
                                ) : (
                                    <p>Upload Image</p>
                                )}
                            </div>
                 
                        </div>
                        {formik.touched.Picture && formik.errors.Picture ? (
                            <div style={{ color: 'brown', alignSelf: "start", marginLeft: "7.5%" }}
                                sx={{ marginTop: '5px', }}>{formik.errors.Picture}</div>
                        ) : null}

                  
                <div>
                            <Button
                                variant="contained"
                                type="submit"
                                sx={{
                                    margin: '1rem 0', color: "#000",
                                    backgroundColor: "#fff",
                                    "&:hover": { backgroundColor: "white" }
                                }}
                            >
                                Register
                            </Button>
                        </div>

                  
        </form>


    </Paper>
            
</Paper>
  )
}

export default LectSignUp
