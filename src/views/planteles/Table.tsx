import Link from '@mui/material/Link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import Button from '@mui/material/Button'
import Ver from 'mdi-material-ui/ClipboardTextSearchOutline'
import useSWR from 'swr';


// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'

interface RowType {
  nombre: string
  director: string
  nivel: string
}

interface StatusObj {
  [key: string]: {
    color: ThemeColor
  }
}

const rows: RowType[] = [
  {
    nombre: 'CEI OTTONIEL',
    director: 'value value',
    nivel: 'INICIAL'
  },
  {
    nombre: 'E B B GRAN MARISCAL DE AYACUHO',
    director: 'MARÍA ROMERO',
    nivel: 'PRIMARIA'
  },
  {
    nombre: 'LICEO VERITAS',
    director: 'JOSE MORILLO',
    nivel: 'MEDIA'
  },
]

const nivelObj: StatusObj = {
  INICIAL: { color: 'info' },
  PRIMARIA: { color: 'error' },
  MEDIA: { color: 'primary' }
}

export default function PlantelesTable() {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Nivel</TableCell>
              <TableCell>Director</TableCell>
              <TableCell>Opciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: RowType) => (
              <TableRow hover key={row.nombre} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.nombre}</Typography>             
                  </Box>
                </TableCell>
                <TableCell>
                  <Chip
                    label={row.nivel}
                    color={nivelObj[row.nivel].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
                <TableCell>{row.director}</TableCell>
                <TableCell><Link href='/planteles/gma'><Button variant="outlined" size="small"><Ver/></Button></Link></TableCell>               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}
