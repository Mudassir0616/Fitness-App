import React,{useState, useEffect} from 'react'
import {Box} from '@mui/material'
import { exerciseOptions, fetchData, youtubeOptions } from '../utilities/fetchData'
import { useParams } from 'react-router-dom'
import Details from './Details'
import Youtube from './Youtube'
import SimilarExercises from './SimilarExercises'
import Footer from './Footer'



const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({})
  const [youtubeVideos, setYoutubeVideos] = useState([])
  const [similarExercises, setSimilarExercises] = useState({})
  const {id} = useParams()

  const fetchExercisesData = async()=>{
    // const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
    // const yotubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';


// --------------------THIS IS MY ExerciseCard DETAILS-----------
    const exerciseDetailData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions)
    setExerciseDetail(exerciseDetailData)

    // ----------------THIS IS YOUTUBE DATA FETCHING------------
    const exerciseVideoData = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetailData.name}`, youtubeOptions)
    setYoutubeVideos(exerciseVideoData.contents)

    // THIS IS DAT FETCHING IS FOR SIMILAR EXERCISES
    const similarExerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
    setSimilarExercises(similarExerciseData)
     



    
  }
  // 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList'



  useEffect(()=>{
    fetchExercisesData()
  },[id])

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail}/>
      <Youtube youtubeVideos={youtubeVideos} name={exerciseDetail.name}/>
      <SimilarExercises similarExercises={similarExercises}/>
      <Footer/>
    </Box>
  )
}

export default ExerciseDetail
