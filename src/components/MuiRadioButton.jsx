import { useState } from 'react';
import {
  Box,
  FormLabel, FormControlLabel, FormControl,
  RadioGroup, Radio, FormHelperText
} from '@mui/material';

export const MuiRadioButton = () => {

  const [value, setValue] = useState('');
  console.log({value})
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
  	<Box width='250px'>
      <FormControl>
        <FormLabel id='job-experience-group-label'>
          Year of experience
        </FormLabel>
        <RadioGroup
          name='job-experience-group'
          aria-labelledby='job-experience-group-label'
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            control={<Radio size='medium' color='secondary'/>}
            label='0-2'
            value='0-2'
          />
          <FormControlLabel control={<Radio/>} label='3-5' value='3-5' />
          <FormControlLabel control={<Radio/>} label='6-8' value='6-8' />
        </RadioGroup>
        <FormHelperText error>Invail select</FormHelperText>
      </FormControl>
	</Box>
  )
}