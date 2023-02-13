import { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

export const MuiDialog = () => {

  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'
      >
        <DialogTitle>Submit the test?</DialogTitle>
        <DialogContent>
          <DialogContentText>Are u sure u want to submit the test? U will be able to edit after submitting</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Submit</Button>
          <Button onClick={() => setOpen(false)} autofocus>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

