import { useState } from 'react';
import {
  Box,
  Rating
} from '@mui/material';
import { Stack } from '@mui/system'
import { Favorite, FavoriteBorder } from '@mui/icons-material';

export const MuiRaing = () => {

  const [value, setValue] = useState(null)
  console.log({value})

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
  	<Box>
      <Stack spacing={2}>
        <Rating
          value={value}
          onChange={handleChange}
          precision={0.5}
          size='large'
          icon={<Favorite fontSize='inherit' color='error' />}
          emptyIcon={<FavoriteBorder fontSize='inherit' />}
        />
      </Stack>
    </Box>
  )
}