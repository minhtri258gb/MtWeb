import * as React from 'react';
import { Stack, TextField } from '@mui/material';

export const MuiTextField = () => {
  return (
  	<Stack spacing={4}>
      <Stack direction='row' spacing={2}>
        <TextField variant='filled' label='Name' />
        <TextField variant='outlined' label='Name2' />
        <TextField variant='standard' label='Name3' />
      </Stack>
	  </Stack>
  );
}