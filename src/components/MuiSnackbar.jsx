import { useState } from 'react'
import { Button, Snackbar } from '@mui/material'

export const MuiSnackbar = () => {

  const [open, setOpen] = useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      <Snackbar
        message='form submited successfully!'
        autoHideDuration={3000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
      />
    </>
  )
}

