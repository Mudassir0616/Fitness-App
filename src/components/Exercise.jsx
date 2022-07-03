import React, {useState} from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import ExerciseCard from './ExerciseCard'
import { useEffect } from 'react';
import { exerciseOptions, fetchData } from '../utilities/fetchData'



function Exercise({exercises, setExercises, bodyPart}) {

  const [currentPage, setCurrentPage] = useState(1);

  const exercisePerpage = 13;
  const indexOfLastExercise = currentPage * exercisePerpage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerpage;
  const currentExercises = exercises.slice( indexOfFirstExercise, indexOfLastExercise )


  const paginate =(e, value)=>{
    setCurrentPage(value)
  }

// AS YOU CAN SEE ON THE HOME PAGE THERE ARE LIST OF BODY PARTS UNDER A " G-Y-M " ICON 
// THIS " useEffect " BELOW WILL FETCH DATA ONLY WHEN A PARTICULAR BODY PART IS CLICKED AND NOT ON EVERY PAGE LOAD ------------THIS SAME FUNCTION IS WRITTEN ON THE "HorizontalScrollbar" PAGE..... 
  const fetchExerciseData = async()=>{
    let exercisesData = [];

    if(bodyPart === 'all'){
      exercisesData =  await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
    }
    else{
      exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
    }
    // HERE THE "setExercises" IS DEFINED AS A PARICULAR BODY PART EXERCISE
    
    setExercises(exercisesData); 
  }

  useEffect(()=>{
    fetchExerciseData()
  },[bodyPart])

  
  return (
    <Box>
      <Stack alignItems='center' mb='60px'>
      <Typography mb='77px' textAlign='center' mr='20px'className='srch-txt'
       sx={{fontSize:{lg:'39px', xs:'20px'},p:{lg:'5px 50px', xs:'5px 40px'}}}>
        {currentExercises.length > 1 ? 'Your Exercises': `Search Your Exercise `}
      </Typography>

               {/* I WANTED TWO PAGINATION ON MY PAGE THIS IS THE FIRST ONE */}
        {exercises.length > exercisePerpage && (
          <Pagination 
            count={Math.round(exercises.length / exercisePerpage)} 
            shape="rounded"
            size='large' 
            page={currentPage}
            onChange={paginate}
          />
            
        )}
      </Stack>

      <Stack justifyContent='center' direction='row' flexWrap='wrap'
        sx={{gap: { lg:'110px', xs:'50px' }}}
      >

        {currentExercises.map((exercise, index)=>(
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
        
      </Stack>

                         {/* SECOND PAGINATION PAGE */}
      <Stack mt='120px' alignItems='center' mb='60px'>
        {exercises.length > exercisePerpage && (
          <Pagination 
            count={Math.round(exercises.length / exercisePerpage)} 
            shape="rounded"
            size='large' 
            page={currentPage}
            onChange={paginate}
          />
            
        )}
      </Stack>
    </Box>
  )
}

export default Exercise