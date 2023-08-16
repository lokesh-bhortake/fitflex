import { Link } from "react-router-dom"
import { Button, Stack, Typography } from "@mui/material"


const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`} style={{ overflow: 'hidden' }}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <Stack direction="row" sx={{ paddingTop: '5px' }}>
            <Button sx={{ ml: '21px', color: '#FFF', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{ ml: '21px', color: '#FFF', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                {exercise.target}
            </Button>
        </Stack>
        
        <Typography margin='0px 21px' color='#000' pb='20px' fontWeight='bold' textTransform='capitalize' fontSize='24px' > 
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard