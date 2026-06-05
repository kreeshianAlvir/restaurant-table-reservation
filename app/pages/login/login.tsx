import React from 'react'
import './login-styles.css'
import { Box, Typography, TextField, Button } from '@mui/material'
import {Login, Person, Lock} from '@mui/icons-material'
import TextFieldComponent from '../../components/textField'

export const LoginPage = () => {
  return (
    <Box className="login-container">
      <Box className="login-icon">
        <Login />
      </Box>
      <Typography variant="h4">Welcome Back!</Typography>
      <Typography variant="body2">Staff login - Admin Portal</Typography>
      <Box className="login-form">
        <TextFieldComponent label="Username" icon={<Person />} />
        <TextFieldComponent label="Password" type="password" icon={<Lock />} />
        <Button disableElevation={true} variant="contained" color="primary" fullWidth className="login-button">Login</Button>
      </Box>
    </Box>
  )
}