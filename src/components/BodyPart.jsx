import React from 'react'
import { Stack, Typography } from '@mui/material'

import Icon from '../images/gym.png'

const BodyPart = ({item, bodyPart, setBodyPart}) => {
  return (
    <Stack
      type="button"
      alignItems='center'
      justifyContent='center'
      className= 'bodyPart-card'

      sx={{
        borderTop: bodyPart === item ? '4px solid #ff2626' : '',
        // borderBottomLeftRadius: '20px',
        backgroundColor: '#fff',
        width:{lg:'22vw', xs:'36vw'},
        height:{lg:'58vh',xs:'19vh'},
        cursor: 'pointer',
        gap: {lg:'45px', xs:'19px'},
        
      }}

      onClick={()=>{setBodyPart(item)}}
    >
        <img src={Icon} alt="dumbell" style={{width:'80px', height:'80px',}} />

        <Typography fontSize='25px' fontWeight='600' color='#3A1212' textTransform= 'capitalize'>
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart