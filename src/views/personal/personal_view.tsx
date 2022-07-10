import Link from '@mui/material/Link'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'



const FormLayoutsSeparator = () => {
  
  return (
    <Card>
      <CardHeader title='Datos del personal' titleTypographyProps={{ variant: 'h6' }} />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={5}>       
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='NOMBRES' defaultValue="ANGELICA DEL CARMEN"  
              InputProps={{
                readOnly: true,
              }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='APELLIDOS' defaultValue="LINARES" 
              InputProps={{
                readOnly: true,
              }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='SEXO' defaultValue="FEMENINO" 
              InputProps={{
                readOnly: true,
              }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='CEDULA' defaultValue="12477211" 
              InputProps={{
                readOnly: true,
              }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='TELEFONO' defaultValue="04243526977" 
              InputProps={{
                readOnly: true,
              }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='FECHA DE NACIMIENTO' defaultValue="21-07-1977" 
              InputProps={{
                readOnly: true,
              }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='CORREO' defaultValue="linaresangelica11@gmail.com" 
              InputProps={{
                readOnly: true,
              }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='PLANTEL (NOMINA)' defaultValue="J I CAMAGUAN" 
              InputProps={{
                readOnly: true,
              }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='FECHA DE INGRESO AL MPPE' defaultValue="01-01-2005" 
              InputProps={{
                readOnly: true,
              }} />
            </Grid>
          </Grid>
        </CardContent>
        <Divider sx={{ margin: 0 }} />
        <CardActions>
        <Link href='/personal/gma'>
          <Button size='large' color='primary' variant='outlined'>
            Volver
          </Button>
        </Link> 
        </CardActions>
      </form>
    </Card>
  )
}

export default FormLayoutsSeparator
