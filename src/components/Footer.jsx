import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import Logo from '../images/Logo-1.png'


const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
        <Stack gap='40px' alignItems='center' px='40px' pt='25px'>
            <img src={Logo} style={{width:'200px'}}/>
        </Stack>
        <Typography textAlign='center' mt='14px' mb='30px' fontSize='17px' fontWeight='600' px='5px'>
            - By <span style={{color:'#ff2625'}}>Mudassir Shaikh</span>
        </Typography>
    </Box>
  )
}

export default Footer