// ** MUI Imports
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import Button from '@mui/material/Button'
import Ver from 'mdi-material-ui/ClipboardTextSearchOutline'
import useSWR from 'swr'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

interface RowType { cedula: number, apellidos: string, nombres: string, sexo: string, total: number}

const TableDense = () => {
  const { data, error } = useSWR('/api/personal/gma/administrativo', fetcher)
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
            <TableCell>Opciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!!rows && rows.map(row => (
            <TableRow key={row.cedula} sx={{ '&:last-of-type  td, &:last-of-type  th': { border: 0 } }}>
              <TableCell align='left'>{row.cedula}</TableCell>
              <TableCell align='left'>{row.apellidos}</TableCell>
              <TableCell align='left'>{row.nombres}</TableCell>
              <TableCell align='left'>{row.sexo}</TableCell>
              <TableCell><Link href='/personal/personal_view'><Button variant="outlined" size="small"><Ver/></Button></Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableDense

