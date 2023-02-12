
import { NavigateNext } from '@mui/icons-material'
import { Box, Link, Breadcrumbs, Typography } from '@mui/material'

export const MuiBreadcrumbs = () => {

  return (
    <Box m={2}>
      <Breadcrumbs
        aria-label='breadcrumb'
        separator={<NavigateNext fontSize='small'/>}
        maxItems={6}
        itemsAfterCollapse={2}
      >
        <Link underline='hover' href='#'>Home</Link>
        <Link underline='hover' href='#'>Catalog</Link>
        <Link underline='hover' href='#'>Accessories</Link>
        <Typography color='text.primary'>Shoes</Typography>
      </Breadcrumbs>
    </Box>
  )
}