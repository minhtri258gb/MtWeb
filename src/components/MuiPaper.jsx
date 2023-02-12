import React from 'react'
import { Box, Grid, Paper } from '@mui/material'

export const MuiPaper = () => {
  return (
    <Paper sx={{ padding: '32px' }} elevation={4}>
      <Grid container my={4}>
        <Grid item xs={3}>
          <Box bgcolor='primary.light' p={2}>Item 1</Box>
        </Grid>
        <Grid item xs={9}>
          <Box bgcolor='primary.light' p={2}>Item 2</Box>
        </Grid>
        <Grid item xs={9}>
          <Box bgcolor='primary.light' p={2}>Item 3</Box>
        </Grid>
        <Grid item xs={3}>
          <Box bgcolor='primary.light' p={2}>Item 4</Box>
        </Grid>
      </Grid>
    </Paper>
  )
}