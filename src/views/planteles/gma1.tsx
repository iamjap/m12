// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'

const createData = (grado: string, seccion: string, masculino: number, femenino: number, total: number) => {
  return { grado, seccion, masculino, femenino, total }
}

const rows = [
  createData('PRIMERO', 'A', 13, 13, 26),
  createData('PRIMERO', 'B', 11, 15, 26),
  createData('SEGUNDO', 'A', 5, 7, 12),
  createData('SEGUNDO', 'B', 8, 9, 17),
  createData('TERCERO', 'A', 8, 6, 14),
  createData('TERCERO', 'B', 12, 7, 19),
  createData('CUARTO', 'A', 13, 8, 21),
  createData('CUARTO', 'B', 18, 7, 25),
  createData('QUINTO', 'A', 10, 12, 22),
  createData('QUINTO', 'B', 11, 15, 26),
  createData('SEXTO', 'A', 8, 16, 24),
  createData('SEXTO', 'B', 11, 12, 23),
]

const TableDense = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell>Grado</TableCell>
            <TableCell align='right'>Sección</TableCell>
            <TableCell align='right'>Masculino</TableCell>
            <TableCell align='right'>Femenino</TableCell>
            <TableCell align='right'>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.grado} sx={{ '&:last-of-type  td, &:last-of-type  th': { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {row.grado}
              </TableCell>
              <TableCell align='right'>{row.seccion}</TableCell>
              <TableCell align='right'>{row.masculino}</TableCell>
              <TableCell align='right'>{row.femenino}</TableCell>
              <TableCell align='right'>{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableDense