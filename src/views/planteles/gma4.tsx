// ** MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const CardInfluencer = () => {
  return (
    <Card>
      <CardHeader title='Datos Generales' />
      <CardContent>
        <Typography variant='body2' sx={{ marginBottom: 3 }}>
          Nombre: E.B. GRAN MARISCAL DE AYACUCHO
        </Typography>

        <Typography variant='body2' sx={{ marginBottom: 3 }}>       
          Dirección: VERITAS CALLE 8 AL FINAL
        </Typography>
        <Typography variant='body2' sx={{ marginBottom: 3 }}>
          Teléfono: 02468711754
        </Typography>

        <Typography variant='body2' sx={{ marginBottom: 3 }}>
          Codigo DEA: OD10881208 
        </Typography>

        <Typography variant='body2' sx={{ marginBottom: 3 }}>
          Codigo Administrativo: 10006589976
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardInfluencer
