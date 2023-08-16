import { Box, Stack, Button } from '@mui/material'
import BodyPart from './BodyPart'
import { useState, useRef } from 'react';
import RightButton from '../assets/icons/right-arrow.png'
import LeftButton from '../assets/icons/left-arrow.png'
import ExerciseCard from './ExerciseCard'


const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const contentWidth = container.scrollWidth;
    const scrollStep = 500;

    const newPosition = direction === 'right'
    ? Math.min(scrollPosition + scrollStep, contentWidth - containerWidth)
    : Math.max(scrollPosition - scrollStep, 0);

    container.scrollTo({
      left: newPosition,
      behavior: 'smooth',
    });

    setScrollPosition(newPosition);
  };

  return (
    <>
      <Stack
        ref={containerRef}
        direction="row"
        alignItems="center"
        overflow="hidden"
        sx={{
          gap: { lg: '40px', md: '20px', sm: '10px', xs: '5' },
          transition: 'transform 0.3s ease-in-out',
          p: '20px'
        }}
      >
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            sx={{
              m: '10px',
              display: 'inline-block', 
              transition: 'box-shadow 0.3s ease-in-out',
              '&:hover': {
                boxShadow: '0px 2px 4px #FF2625',
              }
            }}
          >
            {
              isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /> : <ExerciseCard exercise={item} />
            }
          </Box>
        ))}
      </Stack>
      
      <Box mt="10px" mr="30px" textAlign="right">
        <Button className='right-left-buttons' onClick={() => handleScroll('left')}>
          <img src={LeftButton} alt="Leftarrow" />
        </Button>

        <Button className='right-left-buttons' onClick={() => handleScroll('right')}>
          <img src={RightButton} alt="Rightarrow" />
        </Button>
      </Box>
    </>
  )
}

export default HorizontalScrollBar