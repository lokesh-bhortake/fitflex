import { useEffect, useState } from "react"
import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import { exerciseOptions, fetchData } from "../utils/fetchData"
import HorizontalScrollBar from "./HorizontalScrollBar"

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  
  const handleScroll = () => {
    const targetElement = document.getElementById("exercises");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

      setBodyParts(['all', ...bodyPartsData])
    }

    fetchExercisesData();
  }, [])

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      const searchedExercises = exerciseData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search) 
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      if (searchedExercises.length === 0) {
        alert('No exercises found. Please try a different search.');
      } else {
        setExercises(searchedExercises);
        handleScroll();
      }      
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: "44px", xs: "30px" }}} mb="50px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
          sx={{
            input: { fontWeight: 700, border: 'none', borderRadius: '4px' },
            width: { lg: '1000px', xs: '350px' },
            backgroundColor: '#FFF',
            borderRadius: "40px"
          }}
        />

        <Button className="search-btn"
          sx={{
            bgcolor: '#FF2625',
            color: '#FFF',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '16px', xs: '12px' },
            height: '56px',
            position: 'absolute',
            right: 0,
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <Typography fontWeight={700} sx={{ fontSize: { lg: "44px", xs: "30px" }}} mb="50px" >
          Explore exercises by target muscles <br />
        </Typography>
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
      </Box>
    </Stack>
  )
}

export default SearchExercises