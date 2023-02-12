import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Stack, Typography } from '@mui/material'

export const MuiCard = () => {
  return (
    <Box width='300px'>
      <Card>
        <CardMedia
          component='img'
          height='140'
          image='https://source.unsplas.com/random'
          alt='unsplash image'
        />
        <CardContent>
          <Typography gutterBotton variant='h5' component='div'>React</Typography>
          <Typography variant='body2' color='text.secondary'>React blablabla</Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Share</Button>
          <Button size='small'>More</Button>
        </CardActions>
      </Card>
    </Box>
  )
}