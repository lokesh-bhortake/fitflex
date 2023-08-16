import { Box } from "@mui/material"
import { useState } from "react"
import HeroBanner from "../components/HeroBanner"
import SubscriptionPlans from "../components/SubscriptionPlans"
import SearchExercises from "../components/SearchExercises"
import Exercises from "../components/Exercises"


const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])
  return (
    <Box>
        <HeroBanner />
        <SubscriptionPlans />
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
    </Box>
  )
}

export default Home