import * as React from 'react';
import { Box, TextField, MenuItem } from '@mui/material';

export const MuiSelectBox = () => {

  const [languages, setLanguages] = React.useState([]);
  console.log({languages})
  const handleChange = (event) => {
    const value = event.target.value;
    setLanguages(typeof value === 'string' ? value.split(',') : value)
  }

  return (
  	<Box width='250px'>
		  <TextField
        label='Languages'
        select
        value={languages}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size='small'
        color='secondary'
        helperText='help text'
        error
      >
        <MenuItem value='cpp'>C++</MenuItem>
        <MenuItem value='cshaft'>C#</MenuItem>
        <MenuItem value='java'>Java</MenuItem>
		  </TextField>
	</Box>
  )
}