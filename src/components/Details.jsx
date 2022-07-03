import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import BodyPartImage from '../logo/body-part.png'
import TargetImage from '../logo/target.png'
import EquipmentImage from '../logo/equipment.png'


const Details = ({exerciseDetail}) => {
// NOW WHEN WE ARE ASSIGNING THE VALUE FROM API WE DO NOT NEED TO USE ---"exerciseDetail.name || .target..."
    const { bodyPart, gifUrl, name, equipment, target} = exerciseDetail

    const IconDetails = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },

        {
            icon: TargetImage,
            name: target
        },
        
        {
            icon: EquipmentImage,
            name: equipment
        },
    ]
   
  return (
    <Stack gap='60px' mt='90px' sx={{flexDirection:{ lg: 'row'}, p:'20px', alignItems:'center'}}>
        <img src= {gifUrl} className='detail-image'/>

        <Box sx={{width:{lg:'600px', xs:'350px'}}}>
    <Typography textTransform='capitalize' fontWeight='600' fontSize='2.1rem'>
        {name} -
    </Typography> <br />
    <Typography fontWeight='500' fontSize='1rem'>
        Exercise keep you Strong. <span style={{color:'#ff2625', textTransform:'capitalize'}}>{name}</span> is one of the best exercises to target your <span style={{color:'#ff2625', textTransform:'capitalize'}}>{target}</span>. it will help you improve your mood and gain energy, <span style={{color:'#ff2625', textTransform:'capitalize'}}>{name}</span> helps lower your risk of heart diseases such as high cholesterol, coronary artery disease, and heart attack. Regular exercise can also lower your blood pressure and triglyceride levels.
    </Typography>

    {IconDetails.map((item)=>(
        <Stack className='detail-icons' alignItems='flex-start'>
            <Button >
                <img src= {item.icon} style={{width:'60px'}}/>
                <h6 style={{color:'gray', fontSize:'0.9rem', fontWeight:'600', p:'0 40px'}}> ----- {item.name}</h6>
            </Button>
        </Stack>
    ))}

    </Box>
    
    </Stack>
  )
}

export default Details