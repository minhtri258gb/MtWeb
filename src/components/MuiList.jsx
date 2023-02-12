import { Mail } from '@mui/icons-material'
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'

export const MuiList = () => {
  return (
    <Box sx={{ width: '400px', bgcolor: '#efefef' }}>
      <List>
        <ListItem>
          <ListItemIcon><Mail/></ListItemIcon>
          <ListItemText primary='List item 1' secondary='Secondary text' />
        </ListItem>
        <ListItem>
          <ListItemIcon><Mail/></ListItemIcon>
          <ListItemText primary='List item 2' secondary='Secondary text' />
        </ListItem>
        <ListItem>
          <ListItemIcon><Mail/></ListItemIcon>
          <ListItemText primary='List item 3' secondary='Secondary text' />
        </ListItem>
      </List>
    </Box>
  )
}