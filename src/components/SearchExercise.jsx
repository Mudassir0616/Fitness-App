import React from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { exerciseOptions, fetchData } from '../utilities/fetchData'
import { useEffect } from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';


function SearchExercise({setExercises, bodyPart, setBodyPart}) {

    const [search, setSearch] = useState('');
    
    const [bodyParts, setBodyParts] = useState([])

    const fetchExerciseData = async()=>{
        const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

        setBodyParts(['all', ...bodyPartData])
    }

    useEffect(()=>{
        fetchExerciseData()
    },[])


    const handleSearch = async()=>{
        if(search){
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

            console.log(exerciseData)

        const searchedExercise = exerciseData.filter(
            (exercise)=> exercise.name.toLowerCase().includes(search)
            ||exercise.target.toLowerCase().includes(search)
            ||exercise.equipment.toLowerCase().includes(search)
            ||exercise.bodyPart.toLowerCase().includes(search)
        );
        setSearch('');
        setExercises(searchedExercise)
    }
}
  return (
    <Stack alignItems='center' justifyContent="center">
        <Typography fontWeight="700" textAlign='center' mb="50px"
        sx={{fontSize: {lg: '45px', xs: '30px'}}}>
            Awesome Exercises You <br /> Should Know.! 
        </Typography>

        <Box position='relative' mb="73px">
            <TextField
            sx={{
                input: {fontSize:'20px', fontWeight: '600', border:'none', borderRadius:'4px', textAlign:'center',color:'gray'},
                width: {lg: '800px', xs: '250px'},
                backgroundColor: 'white',
                borderRadius:'40px'
            }}
            
            value={search}
            onChange={(e)=> setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            type='text'
            />

            <Button className='search-btn' sx={{
                bgcolor: '#ff2625',
                color: '#fff',
                width: {lg: '145px', xs:'40px'},
                height:'59px',
                textTransform:'capitalize',
                fontSize: {lg:'21px', xs:'15px'},

            }} onClick={handleSearch}>
               
                Search
            </Button>

        </Box>

        <Box sx={{position:'relative', width:'100%', p:'20px'}}>
            <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart/>
        </Box>

    </Stack>
  )
}

export default SearchExercise