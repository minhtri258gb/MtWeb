import React from 'react'
import { Box, Divider, Stack } from '@mui/material'

export const MuiLayout = () => {
  return (
    <Stack
      sx={{ border: '1px solid' }}
      direction='row'
      spacing={2}
      divider={<Divider orientation='vertical' flexItem/>}
    >
      <Box combonent='span' sx={{
        backgroundColor: 'primary.main',
        color: 'while',
        width: '100px',
        height: '100px',
        padding: '16px',
        '&:hover': {
          backgroundColor: 'primary.light',
        },
      }}>
        Codevolution
      </Box>

      <Box
        display='flex'
        width='100px'
        height='100px'
        bgcolor='success.light'
        p={2}
      >
      </Box>
    </Stack>
  )
}