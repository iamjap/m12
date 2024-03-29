// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

interface RowType { grado: string, seccion: string, masculino: number, femenino: number, total: number}

const TableDense = () => {
  const { data, error } = useSWR('/api/planteles/ebgma/matricula', fetcher)
  const rows: RowType[] = data
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
          {!!rows && rows.map(row => (
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

