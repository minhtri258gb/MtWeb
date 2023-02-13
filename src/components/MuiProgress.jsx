import { Stack, CircularProgress, LinearProgress } from '@mui/material'

export const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress/>
      <CircularProgress clolor='success' />
      <CircularProgress variant='determinate' value={60} />
      
      <LinearProgress/>
      <LinearProgress clolor='success' />
      <LinearProgress variant='determinate' value={60} />
    </Stack>
  )
}

