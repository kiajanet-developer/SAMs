import React from 'react'
import { Box } from '@mui/material'

const LecturerHome = () => {
  const FullName = sessionStorage.getItem("FullName")
  const Email = sessionStorage.getItem("Email")
  return (
    <Box>
      <h1>Welcome, {FullName}!</h1>
      <p>Your email is: {Email}</p>
      <p>This is the LecturersHome page.</p>
    </Box>
  )
}

export default LecturerHome
