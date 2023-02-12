import { useState } from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { Favorite, Home, Person } from '@mui/icons-material'

export const MuiBottomNavigation = () => {

  const [value, setValue] = useState(0)

  return (
    <BottomNavigation
      sx={{ width: '100%', postion: 'absolute', bottom: 0 }}
      value={value}
      onChange={(event, newValue) => { setValue(newValue) }}
      showLabels
    >
      <BottomNavigationAction label='home' icon={<Home/>} />
      <BottomNavigationAction label='favorite' icon={<Favorite/>} />
      <BottomNavigationAction label='Profile' icon={<Person/>} />
    </BottomNavigation>
  )
}