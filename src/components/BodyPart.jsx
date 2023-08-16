import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {

  const handleScroll = () => {
    const targetElement = document.getElementById("exercises");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }
  
  return (
    <Stack 
      type="button" 
      alignItems="center" 
      justifyContent="center" 
      className="bodypart-card"
      sx={{ borderTop: bodyPart === item ? '4px solid #ff2625' : '' ,
          backgroundColor: '#FFF',
          borderBottomLeftRadius: '20px',
          width: '320px',
          height: '340px',
          cursor: 'pointer',
          gap: '25px'
        }
      }
      onClick={() => {
        setBodyPart(item);
        handleScroll()
      }}
    >
      <img src={Icon} alt="dumbbell" style={{ width: "50px", height: "50px"}} />
      <Typography fontSize='24px' fontWeight="bold" color="#3A1212" textTransform="capitalize" >
        {item}
      </Typography>
    </Stack>
  )
}

export default BodyPart