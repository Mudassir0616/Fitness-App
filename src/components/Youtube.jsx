import React from 'react'
import { Box, Stack, Typography } from '@mui/material'



const Youtube = ({youtubeVideos, name}) => {
    
    if(!youtubeVideos.length) return(<h1 style={{textAlign:'center', mt:'30px'}}>loading...</h1>)
    // console.log(youtubeVideos)
  return (
    <Box sx={{marginTop:{lg:'150px', xs:'20px'}}} p='20px'>
        <Typography variant='h4' mb='50px'>
        Watch how to perform <span style={{color:'#ff2625', textTransform:'capitalize'}}>{name}</span> 
        </Typography>

        <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center'
         sx={{flexDirection: { lg:'row' }, gap: {lg:'50px', xs:'0'}, fontSize:{lg:'18px', xs:'18px'}}}>
            
            {/* SLICE IS USED TO DEFINE HOW MANY VIDEOS WE WANT ON OUR PAGE */}
            {youtubeVideos?.slice(0, 6).map((item, index)=>(
                <a href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                   className='exercise-video'
                //    "target=_blank" IS USED TO OPEN THE VIDEO IN A NEW TAB
                   target='_blank'
                   rel='noreferrer'
                   key={index}>

                    <img src={item.video.thumbnails[0].url} alt={item.video.channelId} />
                    <h4 style={{color:'#000'}}>  {item.video.title} - <span style={{color:'blue'}}>({item.video.lengthText})</span></h4>

                </a>
            ))}
        </Stack>
    </Box>
  )
}

export default Youtube