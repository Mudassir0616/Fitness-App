import React, {useContext} from 'react'
import { Box, Typography } from '@mui/material'
import BodyPart from './BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import RightArrowIcon from '../logo/right-arrow.png'
import LeftArrowIcon from '../logo/left-arrow.png'
import ExerciseCard from '../components/ExerciseCard'


const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};


const HorizontalScrollbar = ({ data, setBodyPart, bodyPart, isBodyPart }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>

       {data.map((item)=>(
        <Box 
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          
          sx={{width:{lg:'27vw', xs:'61vw'},
          height:{lg:'100vh', xs:'49vh'},
          ml:{lg:'60px', xs:'80px'},
          }}
          
        >
         
         { isBodyPart ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/> 
           : <ExerciseCard exercise={item}/> }

        </Box>
       )
      )}
    </ScrollMenu>
  )



export default HorizontalScrollbar