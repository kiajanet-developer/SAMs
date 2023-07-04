import React, { useState } from 'react'
import {
  Paper, AppBar, IconButton, Typography, Stack, Avatar,
  Box,CircularProgress,Button
} from '@mui/material'
import logo from '../images/logo.png'
import { styled } from '@mui/material/styles';
import { GoPlus } from "react-icons/go"




const StudentsProgress = () => {
  const [Picture, setPicture] = useState(null)
  const FullName = sessionStorage.getItem("FullName")

    const FileInput = styled('input')({
      display: 'none',
    });

    const StyledAvatar = styled(Avatar)({
      width: '40px',
      height: '40px',
    });
  return (
    <Paper elevation={24}
      sx={{
        backgroundColor: "#E7DFDF",
        display: "flex",
        flexDirection:"column",
        margin: "auto",
        width: { xs: "95%", sm: "80%", md: "80%", lg: "60%", xl: "65%" },
        marginTop: { md: '2rem', xs: '2rem', sm: '2rem' },
        height: "90vh",
       
      }} >
      
      <AppBar position='static' sx={{
        backgroundColor: "#fff", display: "flex", flexDirection: "row",
        alignItems: "center", justifyContent: "space-between",
        gap: { xs: "2rem",sm:'1rem',md:'1rem',lg:'1rem',xl:'1rem'},
        padding:'10px'
      }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton size='Large' edge='start' color='inherit' aria-label='Logo'>
              <img style={{height:"30px",width:"30px",objectFit:"contain"}} src={logo} alt="SAMS Logo" />
          </IconButton>
          <Typography variant='h6' component="div"
            sx={{ color: "#000", fontWeight: "bold",  ml: 1  }}>
              SAMS
          </Typography>
        </div>
          <Stack direction='row' spacing={1}  >
            <div style={{ position: 'relative' ,cursor:"pointer"}} onClick={() => {
              document.getElementById("Picture").click()
            }}>
              <StyledAvatar
                src={Picture ? URL.createObjectURL(Picture) : ''}
                alt="Profile Picture"
                sx={{ size:"small" }}
            />
            <div>
                <FileInput
                  id="Picture"
                  name="Picture"
                  type="file"
                  onChange={(event) => {
                    setPicture( event.currentTarget.files[0]);
                  }}
                  />
                    <div style={{
                      backgroundColor: "#F5F5F5",
                      borderRadius: "50%",
                      height: "20px",
                      width: "20px",
                      display:"flex",
                      justifyContent:"center",
                      alignItems: "center",
                      position: "absolute",
                      bottom: 0,
                      right:0
                    }}>
                  <GoPlus style={{color:"#000"}}/>
                </div>
                </div>
            </div>
            <Typography variant='h6' component="div"
            sx={{ color: "#000", fontWeight: "bold"}}>
             {FullName}
          </Typography>
          </Stack>
      </AppBar>
      
      <Box sx={{
        height: "40vh", backgroundColor: "#060A5A", width: "100%",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        position: "relative"
      }}>
        <Box sx={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          alignContent: "center", color: "#fff", position: "absolute",
          top:"25%",width:"100%", 
        }}>
          <Box sx={{
            height: "60px", backgroundColor: "#04073E",
            opacity: "0.8", textAlign: "center", color: "#756868",
            cursor: "pointer",fontSize:"15px",fontWeight:"bold"
            
          }}>
            <Button>Enroll Now</Button> 
          </Box>
          <Box sx={{
            height: "60px", backgroundColor: "#1E12A7",
            opacity: "0.8", textAlign: "center", cursor: "pointer",
            fontSize:"15px",fontWeight:"semiBold"
          }}>
            <p>Attendance Progress</p>
          </Box>
        </Box>
        
      </Box>

      <Box sx={{
        zIndex: 9, display: 'flex', flexDirection: "column",
        gap: { xs: "2.5rem", sm: '4rem', md: '4rem', lg: '4rem', xl: '4rem' },
        marginTop: { xs: "-15%",md:"-1%",sm:'-10%',xl:'0',lg:0 }
      }}>  
      <Box
          sx={{
          height: { xs: "14vh", sm: "11vh", md: "12vh", lg: "14vh", xl: "14vh" },
          backgroundColor: "#F5F5F5", 
          width: { xs: "85%", sm: "90%", md: "90%", lg: "85%", xl: "85%" },
            margin: "auto", marginTop: '-7%',
            zIndex: 9, borderRadius: "10px",
          display: "flex", justifyContent: "space-around",
          padding: { xs: "20px" },
          gap:{xs:"3px"}
          }}>
          <Box sx={{marginLeft: "10px" }}>
          <CircularProgress variant="determinate" value={85}
              size='2.5rem' sx={{ marginTop: "20px" }} />
          </Box>
        <div>
          <h3>Communication systems</h3>
          <p style={{color:"#756868"}}>BCE3112</p>
        </div>
        <div style={{
          height: "90%", width: "1%",
          backgroundColor: "#E7DFDF",
          marginTop: "5px",
          marginBottom: "5px",
          borderRadius:"10px"
        }}>

        </div>
        <div>
          <h3>Attended</h3>
          <p style={{color:"#756868"}}>14</p>
        </div>

        <div style={{
          height: "90%", width: "1%",
          backgroundColor: "#E7DFDF",
          marginTop: "5px",
          marginBottom: "5px",
          borderRadius:"10px"
        }}>

        </div>
        <div>
          <h3>Missed</h3>
          <p style={{color:"#756868"}}>4</p>
        </div>

        <div style={{
          height: "90%", width: "1%",
          opacity:"0.8",
          marginTop: "5px",
          marginBottom: "5px",
          borderRadius: "10px",
          
        }}>

        </div>
      </Box>
      <Box
          sx={{
          height: { xs: "14vh", sm: "11vh", md: "12vh", lg: "14vh", xl: "14vh" },
          backgroundColor: "#F5F5F5", 
          width: { xs: "85%", sm: "90%", md: "90%", lg: "85%", xl: "85%" },
          margin: "auto", marginTop: "-6%",
          borderRadius: "10px",
          display: "flex", justifyContent: "space-around",
          padding: { xs: "20px" },
          gap:{xs:"5px"}
          }}>
        <Box sx={{marginLeft:"10px"}}>
        <CircularProgress variant="determinate" value={85} size= '2.5rem'sx={{marginTop:"20px"}}/>
        </Box>
        <div>
          <h3>Communication systems</h3>
          <p style={{color:"#756868"}}>BCE3112</p>
        </div>
        <div style={{
          height: "90%", width: "1%",
          backgroundColor: "#E7DFDF",
          marginTop: "5px",
          marginBottom: "5px",
          borderRadius:"10px"
        }}>

        </div>
        <div>
          <h3>Attended</h3>
          <p style={{color:"#756868"}}>14</p>
        </div>

        <div style={{
          height: "90%", width: "1%",
          backgroundColor: "#E7DFDF",
          marginTop: "5px",
          marginBottom: "5px",
          borderRadius:"10px"
        }}>

        </div>
        <div>
          <h3>Missed</h3>
          <p style={{color:"#756868"}}>4</p>
        </div>

        <div style={{
          height: "90%", width: "1%",
          opacity:"0.8",
          marginTop: "5px",
          marginBottom: "5px",
          borderRadius: "10px",
          
        }}>

        </div>
      </Box>
      </Box>
    </Paper>
  )
}

export default StudentsProgress