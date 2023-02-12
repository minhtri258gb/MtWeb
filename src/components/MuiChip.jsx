import { Face } from '@mui/icons-material'
import { Stack, Chip, Avatar } from '@mui/material'
import { useState } from 'react'

export const MuiChip = () => {

  const [chips, setChips] = useState(['chip1', 'chip2', 'chip3'])

  const handleDelete = (chipDetele) => {
    setChips(chips => chips.filter(chip => chip !== chipDetele))
  }

  return (
    <Stack direction='row' spacing={1}>
      <Chip label='Chip' color='primary' size='small' avatar={<Avatar>MT</Avatar>} />
      <Chip label='Chip ouline' color='primary' size='small' variant='outlined' icon={<Face/>} />
      <Chip label='Click' color='success' onClick={() => alert('Clicked')} />
      <Chip label='Delete' color='error' onClick={() => alert('Clicked')} onDelete={() => alert('Deleted')} />
      {
        chips.map((chip) => (
          <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
        ))
      }
    </Stack>
  )
}