// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import useSWR from 'swr'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

interface RowType { cedula: number, apellidos: string, nombres: string, sexo: string, total: number}

const TableDense = () => {
  const { data, error } = useSWR('/api/personal/gma/obrero', fetcher)
  const rows: RowType[] = data
  return ( 
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell>Cedula</TableCell>
            <TableCell align='left'>Apellidos</TableCell>
            <TableCell align='left'>Nombres</TableCell>
            <TableCell align='left'>Sexo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!!rows && rows.map(row => (
            <TableRow key={row.cedula} sx={{ '&:last-of-type  td, &:last-of-type  th': { border: 0 } }}>
              <TableCell align='left'>{row.cedula}</TableCell>
              <TableCell align='left'>{row.apellidos}</TableCell>
              <TableCell align='left'>{row.nombres}</TableCell>
              <TableCell align='left'>{row.sexo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableDense

