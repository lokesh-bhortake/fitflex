import { Box, Typography } from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{
      mt: { lg: '50px', xs: '15px' },
      ml: { lg: '40px', xs: '10px' },
    }}>
      <Typography variant='h3' mb={5}> 
        Exercises that target same muscle group
      </Typography>
      {
        targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises} /> : <Loader />
      }


      <Typography variant='h3' mb={5}> 
        Exercises that use same equipment
      </Typography>
      {
        equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises} /> : <Loader />
      }

    </Box>
  )
}

export default SimilarExercises