// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MuiDivider, { DividerProps } from '@mui/material/Divider'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

var EdadMas = new Array();
var EdadFem = new Array();
var resulMas = 0;
var resulFem = 0;
var datosMas  = [];
var datosFem  = [];

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

interface DataType {
  logo: string
  title: string
  amount: string
  subtitle: string
  logoWidth: number
  logoHeight: number
}

const depositData = [
  {
    amount: '+$4,650',
    title: 'Gumroad Account'
  },
  {
    amount: '+$92,705',
    title: 'Mastercard'
  }
]

const withdrawData = [
  {
    amount: '-$145',
    title: 'Google Adsense'
  },
  {
    amount: '-$1870',
    title: 'Github Enterprise'
  }
]

// Styled Divider component
const Divider = styled(MuiDivider)<DividerProps>(({ theme }) => ({
  margin: theme.spacing(5, 0),
  borderRight: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('md')]: {
    borderRight: 'none',
    margin: theme.spacing(0, 5),
    borderBottom: `1px solid ${theme.palette.divider}`
  }
}))

const DepositWithdraw = () => {
  const { data, error } = useSWR('/api/secciones/ceigmasf', fetcher)
 
  if (!!data){
  data.forEach(function(dato) {
  if(dato.sexo=='M') {
    EdadMas.push(getEdad(convertDateFormat(dato.fecha_nac)))
  }
  else if(dato.sexo=='F'){
    EdadFem.push(getEdad(convertDateFormat(dato.fecha_nac)))
  }
  });
  resulMas = EdadMas.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})
  resulFem = EdadFem.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})
  Object.entries(resulMas).forEach(([key, value]) => {
    datosMas.push({ 
      "edad"    : key,
      "cantidad"  : value 
  });
  });
  Object.entries(resulFem).forEach(([key, value]) => {
    datosFem.push({ 
      "edad"    : key,
      "cantidad"  : value 
  });
  });
  }
  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: ['column', 'column', 'row'] }}>
      <Box sx={{ width: '100%' }}>
        <CardHeader
          title='Masculino' 
          sx={{ pt: 5.5, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}                
        />
        <CardContent sx={{ pb: theme => `${theme.spacing(5.5)} !important` }}>
        <Box                
                sx={{ display: 'flex', alignItems: 'center', }}
              >               
                <Box
                  sx={{
                    ml: 4,
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='body2' sx={{ fontWeight: 600, fontSize: '0.95rem' }}>{'Edad'}</Typography>                   
                  </Box>
                  <Typography variant='body2' sx={{ fontWeight: 600, fontSize: '0.95rem' }}>{'Cantidad'}</Typography>
                </Box>
              </Box>
          {datosMas.map((item, index: number) => {
            return (
              <Box
                key={item.edad}
                sx={{ display: 'flex', alignItems: 'center', mb: index !== datosMas.length - 1 ? 6 : 0 }}
              >               
                <Box
                  sx={{
                    ml: 4,
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>{item.edad}</Typography>                   
                  </Box>
                  <Typography variant='subtitle2' sx={{ fontWeight: 600, color: 'success.main' }}>
                    {item.cantidad}
                  </Typography>
                </Box>
              </Box>
            )
          })}
        </CardContent>
      </Box>

      <Divider flexItem />

      <Box sx={{ width: '100%' }}>
        <CardHeader
          title='Femenino'
          sx={{ pt: 5.5, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}                  
        />
        <CardContent sx={{ pb: theme => `${theme.spacing(5.5)} !important` }}>
        <Box                
                sx={{ display: 'flex', alignItems: 'center', }}
              >               
                <Box
                  sx={{
                    ml: 4,
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='body2' sx={{ fontWeight: 600, fontSize: '0.95rem' }}>{'Edad'}</Typography>                   
                  </Box>
                  <Typography variant='body2' sx={{ fontWeight: 600, fontSize: '0.95rem' }}>{'Cantidad'}</Typography>
                </Box>
              </Box>
          {datosFem.map((item, index: number) => {
            return (
              <Box
                key={item.edad}
                sx={{ display: 'flex', alignItems: 'center', mb: index !== datosFem.length - 1 ? 6 : 0 }}
              >
                <Box
                  sx={{
                    ml: 4,
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>{item.edad}</Typography>                   
                  </Box>
                  <Typography variant='subtitle2' sx={{ fontWeight: 600, color: 'error.main' }}>
                    {item.cantidad}
                  </Typography>
                </Box>
              </Box>
            )
          })}
        </CardContent>
      </Box>
    </Card>
  )
}

export default DepositWithdraw
