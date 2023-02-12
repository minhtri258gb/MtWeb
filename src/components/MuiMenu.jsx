import { useState } from 'react'
import { CatchingPokemon, KeyboardArrowDown } from '@mui/icons-material'
import { Stack, AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, Avatar } from '@mui/material'

export const MuiMenu = () => {

  const [anchorEl, setAnchorEl] = useState(null)

  const open = Boolean(anchorEl)

  const handleChange = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
          <CatchingPokemon/>
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          PokemonApp
        </Typography>
        <Stack direction='row'>
          <Button color='inherit'>Feature</Button>
          <Button color='inherit'>Pricing</Button>
          <Button color='inherit'>About</Button>
          <Button
            color='inherit'
            id='reource-button'
            onClick={handleChange}
            aria-controls={open ? 'resource-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            endIcon={<KeyboardArrowDown/>}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            Resource
          </Button>
          <Button color='inherit'>Login</Button>
          <Avatar sx={{ bgcolor: 'primary.light' }} >MT</Avatar>
        </Stack>
        <Menu
          id='resource-menu'
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            'aria-labelleddy': 'resource-button',
          }}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}