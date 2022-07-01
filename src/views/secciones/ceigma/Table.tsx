// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

interface RowType {
  documento: number
  apellidos: string
  nombres: string
  sexo: string
  fecha_nac: string
  observacion: string
}

function convertDateFormat(string) {
  var info = string.split('/');
  return info[1] + '/' + info[0] + '/' + info[2];
}

function getEdad(dateString) {
  let hoy = new Date()
  let fechaNacimiento = new Date(dateString)
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
  let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
  if (
    diferenciaMeses < 0 ||
    (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
  ) {
    edad--
  }
  return edad
}

const DashboardTable = () => {
  const { data, error } = useSWR('/api/secciones/ceigmasf', fetcher)
  const rows: RowType[] = data
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Documento de identidad</TableCell>
              <TableCell>Apellidos</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Sexo</TableCell>
              <TableCell>Fecha de nacimiento</TableCell>            
              <TableCell>Edad</TableCell>
              <TableCell>observacion</TableCell>            
            </TableRow>
          </TableHead>
          <TableBody>
            {!!rows && rows.map((row: RowType) => (
              <TableRow hover key={row.documento} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.documento}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.apellidos}</TableCell>
                <TableCell>{row.nombres}</TableCell>
                <TableCell>{row.sexo}</TableCell>
                <TableCell>{row.fecha_nac}</TableCell>
                <TableCell>{ getEdad(convertDateFormat(row.fecha_nac)) }</TableCell>
                <TableCell>{row.observacion}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
