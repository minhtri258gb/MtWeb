import { useState } from 'react'
import { Box, Drawer, IconButton, SpeedDial, SpeedDialAction, SpeedDialIcon, Typography } from '@mui/material'
import { CopyAll, Print, Share } from '@mui/icons-material'

export const MuiSpeedDial = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <SpeedDial
      ariaLabel='Navigation speed dia'
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon/>}
    >
      <SpeedDialAction icon={<CopyAll/>} tooltipTitle='Copy'/>
      <SpeedDialAction icon={<Print/>} tooltipTitle='Print'/>
      <SpeedDialAction icon={<Share/>} tooltipTitle='Share'/>
    </SpeedDial>
  )
}