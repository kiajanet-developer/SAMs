import React from 'react'
import {Box} from "@mui/material"

const StudentsHome = () => {
  const FullName = sessionStorage.getItem("FullName")
  const Email = sessionStorage.getItem("Email")
  return (
    <Box>
      <h1>Welcome, {FullName}!</h1>
      <p>Your email is: {Email}</p>
      <p>This is the StudentsHome page.</p>
    </Box>
  )
}
export default StudentsHome
