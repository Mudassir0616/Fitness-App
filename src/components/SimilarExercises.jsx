import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollbar from '../components/HorizontalScrollbar'


const SimilarExercises = ({similarExercises}) => {
    
  return (
    <Box sx={{mt:{lg:'170px', xs:'20px'}}} p='20px'>
        <Typography variant='h4'>
            Similar Exercises that target's the same <span style={{color:'#ff2625'}}>Muscle</span>
        </Typography>
        <Stack mt='90px'>
            {similarExercises.length && <HorizontalScrollbar data={similarExercises}/>}
        </Stack>
    </Box>
  )
}

export default SimilarExercises