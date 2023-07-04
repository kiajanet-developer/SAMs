import { React} from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button, Paper} from '@mui/material';
import "../index.css"
import { useState } from 'react';

const StdsignUp = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    // const [fingerprintData, setFingerprintData] = useState(null);

    const handlePictureChange = (event) => {
    const file = event.currentTarget.files[0];
    setSelectedFile(file);
    formik.setFieldValue('Picture', file); // pass the file object to setFieldValue
    };


    const handleEnrollFingerprint = (e) => {
        console.log(e);
    }

    
    const formik = useFormik({
        initialValues:{
            FullName: '',
            RegNo: '',
            Email: '',
            Password: '',
            Program: '',
            Picture: null,
            
        },
        validationSchema:yup.object().shape({
        FullName: yup.string().required(),
        RegNo: yup.string().required(),
        Email: yup.string().email().required(),
        Password: yup.string().required().min(8),
        Program: yup.string().required(),
        Picture: yup
            .mixed()
            .required('File is required')
        }),
        

        onSubmit: async(values) => {
             const formData = new FormData();

                // Append form data to the FormData object
                formData.append('FullName', values.FullName);
                formData.append('RegNo', values.RegNo);
                formData.append('Email', values.Email);
                formData.append('Password', values.Password);
                formData.append('Program', values.Program);
                formData.append('Picture', values.Picture);
                

                // Send the FormData object to the server using fetch
                const response = await fetch('http://localhost:5000/app/Register', {
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
    return (
    <Paper
      elevation={12}
      spacing="2"
      sx={{
        padding: '10px',
        width: {
          xs: '90%',
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
        marginTop: { md: '1rem', xs: '1rem', sm: '2rem' },
        overflow: 'hidden',
       
      }}
        >
        <Paper
        elevation={12}
        spacing="2"
        sx={{
          width: {
            xs: '90%',
            sm: '60%',
            md: '75%',
            lg: '80%',
            xl: '80%',
          },
          display: 'flex',
          flexDirection: "column",
          justifyContent:"center",
          margin: 'auto',
          backgroundColor: '#060A5A',
          alignItems: 'center',
          marginTop: { md: '1rem', xs: '1rem', sm: '2rem' },
          textAlign:"left"
         
        }}
        >
        <h2>Register Student's Details</h2>
                    <form onSubmit={formik.handleSubmit} className='container2'>
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
                            type="text"
                            label="RegNo"
                            name='RegNo'
                            variant="standard"
                            margin="normal"
                            sx={{
                                width: "85%", backgroundColor: "#fff",
                                '& .MuiInput name="RegNo"-underline:before': { borderBottomColor: '#000' },
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
                            {...formik.getFieldProps('RegNo')}
                        />
                        {formik.touched.RegNo && formik.errors.RegNo ? (
                            <div style={{ color: 'brown', alignSelf: "start", marginLeft: "7.5%" }}
                                sx={{ marginTop: '5px', }}>{formik.errors.RegNo}</div>
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
                            label="Program"
                            name='Program'
                            variant="standard"
                            margin="normal"
                            sx={{
                                width: "85%", backgroundColor: "#fff",
                                '& .MuiInput name="Program"-underline:before': { borderBottomColor: '#000' },
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
                            {...formik.getFieldProps('Program')}
                        />
                        {formik.touched.Program && formik.errors.Program ? (
                            <div style={{ color: 'brown', alignSelf: "start", marginLeft: "7.5%" }}
                                sx={{ marginTop: '5px', }}>{formik.errors.Program}</div>
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
                                {selectedFile ? (
                                    <p>{selectedFile.name}</p>
                                ) : (
                                    <p>Upload Image</p>
                                )}
                            </div>
                 
                        </div>
                        {formik.touched.Picture && formik.errors.Picture ? (
                            <div style={{ color: 'brown', alignSelf: "start", marginLeft: "7.5%" }}
                                sx={{ marginTop: '5px', }}>{formik.errors.Picture}</div>
                        ) : null}

                    <Button variant="contained" type="button" onClick={handleEnrollFingerprint}>
                        Enroll Fingerprint
                    </Button>
                        {/* <div className='picButton' onClick={() => {
                            document.getElementById("FingerPrint").click()
                        }}>
                            <input
                                type="file"
                                name="FingerPrint"
                                id="FingerPrint"
                                accept=".bin"
                                style={{ display: "none" }}
                               onChange={handleFingerprintChange}
                            />
                            <div>
                                {fingerprintData ? (
                                    <p>{fingerprintData.name}</p>
                                ) : (
                                    <p>Upload FingerPrint</p>
                                )}
                            </div>
                 
                        </div>
             
                        {formik.touched.FingerPrint && formik.errors.FingerPrint ? (
                            <div style={{ color: 'brown', alignSelf: "start", marginLeft: "7.5%" }}
                                sx={{ marginTop: '5px', }}>{formik.errors.FingerPrint}</div>
                        ) : null}
                     */}
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
 
export default StdsignUp

