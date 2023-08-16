import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import SubscriptionCard from './SubscriptionCard'
import { plans } from '../constants/index'

const SubscriptionPlans = () => {
  return (
    <Box
      sx={{
        mt: { xs: '120px' , lg: '50px' },
        ml: { xs: '40px' },
        mr: { xs: '40px' },
        mb: { xs: '40px' }
      }}
    >
      <Typography fontWeight={700} sx={{ fontSize: {lg: "44px", xs: "30px"}}}>
        Start with our premium fitness plans
      </Typography>

      <Stack
        alignItems='flex-start'
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '20px', md: '20px' },
          mt: '30px',
        }}
      >
        {
            plans.map((plan) => (
                <Box key={plan.id} className='plan-card'>
                    <SubscriptionCard plan={plan} />
                </Box>
            ))
        }
      </Stack>
    </Box>
  )
}

export default SubscriptionPlans