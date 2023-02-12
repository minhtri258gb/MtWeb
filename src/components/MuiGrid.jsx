import React from 'react'
import { Box, Divider, Grid, Stack } from '@mui/material'

export const MuiGrid = () => {
  return (
    <>
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
    </>
  )
}