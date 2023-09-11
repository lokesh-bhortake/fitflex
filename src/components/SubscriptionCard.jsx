import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'

const SubscriptionCard = ({ plan }) => {
  const handlePayment = () => {
    window.open(plan.link, '_blank')
  }
  return (
    <Stack display='flex' flexDirection='column' padding={['20px', '40px']} sx={{height: {lg:'816px', md: '608px'}}}>
      <Box display='flex' flexDirection='column' justifyContent='flex-start' sx={{height: '100%'}}>
        <Typography variant='h4' color='#000' mb='15px'>
          {plan.title}
        </Typography>

        <Typography color='#000'>{plan.description}</Typography>

        <ul style={{ paddingLeft: '15px', marginTop: '20px' }}>
          {plan.features.map((feature, index) => (
            <li key={index}>
              <Typography>{feature}</Typography>
            </li>
          ))}
        </ul>
      </Box>

      <Button
        onClick={handlePayment}
        sx={{
            color: 'white',
            bgcolor: '#FF2625',
            borderRadius: '10px',
            border: 'none',        
            mt: { xs: '20px', md: '40px', lg: '60px' },
            '&:hover': {
                bgcolor: '#FF5B5B',
            },
            justifySelf: 'end'
        }}
      >
        <Typography>Join Now <br /> {plan.price}</Typography>
      </Button>
    </Stack>
  )
}

export default SubscriptionCard