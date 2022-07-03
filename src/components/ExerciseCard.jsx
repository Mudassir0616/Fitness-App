import React from 'react'
import { Button, Stack, Typography } from '@mui/material'
import {Link} from 'react-router-dom'

const ExerciseCard = ({ exercise,}) => {
  return (
    
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
    <img src= {exercise.gifUrl} loading='lazy'/>
    
    <Stack direction='row'>
        <Button sx={{color:'#fff', background:'#ffa9a9', fontSize: '14px', borderRadius:'20px', 
          textTransform:'capitalize'}}>
            {exercise.bodyPart}
        </Button>

        <Button sx={{color:'#fff', background:'#fcc757', fontSize: '14px', borderRadius:'20px', 
          textTransform:'capitalize', ml:'15px'}}>
            {exercise.target}
        </Button>
    </Stack>
    <Typography color='#000' fontWeight='bold' opacity='0.9' pt='20px' ml='20px' textTransform='capitalize' fontSize='22px'>
        {exercise.name}
    </Typography>
    <Typography variant='p' color='#ff2625' opacity='0.9' fontWeight='300' ml='30px' pt='20px'>
        - {exercise.equipment}
    </Typography>
    </Link>
  )
}

export default ExerciseCard