// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import useSWR from 'swr'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Ver from 'mdi-material-ui/ClipboardTextSearchOutline'


const fetcher = (...args) => fetch(...args).then((res) => res.json())

interface RowType { grado: string, seccion: string, docente: string}

const TableDense = () => {
  const { data, error } = useSWR('/api/secciones//ceigma', fetcher)
  const rows: RowType[] = data
  return (
    <Grid><CardHeader title='Secciones de CEI Gran mariscal de ayacucho periodo 2021-2022' titleTypographyProps={{ variant: 'h2', align:'center'}} />
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell>Grado</TableCell>
            <TableCell align='right'>Sección</TableCell>
            <TableCell align='right'>Docente</TableCell>
            <TableCell align='right'>Opciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!!rows && rows.map(row => (
            <TableRow key={row.grado} sx={{ '&:last-of-type  td, &:last-of-type  th': { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {row.grado}
              </TableCell>
              <TableCell align='right'>{row.seccion}</TableCell>
              <TableCell align='right'>{row.docente}</TableCell>
              <TableCell align='right'><Link href='/secciones/seccionf'><Button variant="outlined" size="small"><Ver/></Button></Link></TableCell>                             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
  )
}

export default TableDense

