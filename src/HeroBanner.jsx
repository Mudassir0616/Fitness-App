import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import HeroBannerImg from './images/banner.png'

function HeroBanner() {
  return (
    <Box sx= {{
        mt: {lg: '200px', sm:'140px', xs:'70px'},
        ml: {sm: '50px'}
    }} position='relative' p='26px'>

        <Typography color='#FF2625' fontWeight='600' fontSize='26px' >
            Fitness Club
        </Typography>

        <Typography fontWeight='700' mt='20px' mb='23px' sx={{
            fontSize: {lg: '44px', xs: '37px'}
        }}>
            Sweat, Smile <br /> And Repeat
        </Typography>

        <Typography fontSize='14px' fontWeight='500' mt='7px' mb={4}>
            Check out the most effective exercises personally
        </Typography>

        <Button href='#exercises' variant='contained' color='error' sx={{
            backgroundColor: '#ff2625', p:{lg:"10px", xs:'6px'}, fontWeight:{lg:'600', xs:'500'}
        }}>
            Explore Exercises
        </Button>

        <Typography fontWeight={600} color="#ff2625" fontSize='200px' sx={{
            opacity:"0.1",
            display:{lg: 'block', xs: "none"}
        }} mt={7}>
            Exercises
        </Typography>

        <img src={HeroBannerImg} alt="banner" className='hero-banner-img' />

    </Box>
  )
}

export default HeroBanner