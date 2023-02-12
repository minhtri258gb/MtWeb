import React from 'react'
import { Stack, Button, ButtonGroup, ToggleButtonGroup, ToggleButton} from '@mui/material'

export const MuiButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction='row'>
        <Button variant='text' href='https://google.com'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>

        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons"
          onClick={() => {
            alert('clicked');
          }}>
            Link
          </Button>
      </Stack>

      <Stack direction='row'>
        <ButtonGroup variant='contained' orientation='vertical' size='small' color='secondary'>
          <Button onClick={() => alert("Left")}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      
      <Stack direction='row'>
          <ToggleButtonGroup>
            <ToggleButton value={1}>A</ToggleButton>
            <ToggleButton value={2}>B</ToggleButton>
            <ToggleButton value={3}>D</ToggleButton>
          </ToggleButtonGroup>
      </Stack>
    </Stack>
  )
}