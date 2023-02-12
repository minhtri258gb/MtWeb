import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'

const tableData = [
  { id: 1, code: 'N001', name: 'Nháp 1', date: '12-02-2023' },
  { id: 2, code: 'N002', name: 'Nháp 2', date: '12-02-2023' },
  { id: 3, code: 'N003', name: 'Nháp 3', date: '12-02-2023' },
  { id: 4, code: 'N004', name: 'Nháp 4', date: '12-02-2023' },
]

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
      <Table aria-label='simple table' stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align='center'>STT</TableCell>
            <TableCell>Code</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            tableData.map(row => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': {border: 0} }}
              >
                <TableCell align='center'>{row.id}</TableCell>
                <TableCell>{row.code}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}