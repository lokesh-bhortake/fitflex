import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import logo from '../assets/images/Logo.png'

const Navbar = () => {
  const handleScroll = () => {
    const targetElement = document.getElementById("exercises");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <Stack direction='row' justifyContent='space-around' sx={{gap: {sm: '122px', xs: '40px'}, mt: { sm: '22px', xs: '10px'}, justifyContent: 'none'}} px='20px'>
        <Link to="/">
            <img src={logo} alt="logo" style={{width: '50px', height:'48px', margin: '0 20px', }}/>
        </Link>
        <Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end'>
            <Link to='/' style={{textDecoration: 'none', color:'#3A1212', borderBottom: '3px solid #FF2625'}}>Home</Link>
            <a onClick={() => handleScroll()} style={{textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
        </Stack>
    </Stack>
  )
}

export default Navbar