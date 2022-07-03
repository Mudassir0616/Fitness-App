import React from 'react'
import { Box } from '@mui/material'
import SearchExercise from './components/SearchExercise'
import HeroBanner from './HeroBanner'
import Exercise from './components/Exercise'
import { useState } from 'react'
import Footer from './components/Footer'


const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('')

  console.log(bodyPart)
  return (
    <Box>
      <HeroBanner/>

      <SearchExercise setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>

      <Exercise setExercises={setExercises} bodyPart={bodyPart} exercises={exercises}/>

      <Footer/>
    </Box>
  )
}

export default Home
