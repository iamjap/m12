// ** React Imports
import { ReactElement } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import ChartBoxOutline from 'mdi-material-ui/ChartBoxOutline'
import HumanFemale from 'mdi-material-ui/FaceWoman'
import HumanMale from 'mdi-material-ui/FaceMan'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())


interface DataType {
  stats: number
  title: string
  color: ThemeColor
  icon: ReactElement
}

const StatisticsCard = () => {
  const { data, error } = useSWR('/api/personal/gma/obrero', fetcher)
  
  var masculino = 0;
  var femenino = 0;
  var total = 0;

  if (!!data){
  data.forEach(function(dato) {
  if(dato.sexo=='M') {
    masculino++;
  }
  else if(dato.sexo=='F'){
    femenino++;
  }
  });
  total = data.length;
  }

  const salesData: DataType[] = [
    {
      stats: masculino,
      title: 'Masculino',
      color: 'success',
      icon: <HumanMale sx={{ fontSize: '1.75rem' }} />
    },
    {
      stats: femenino,
      color: 'error',
      title: 'Femenino',
      icon: <HumanFemale sx={{ fontSize: '1.75rem' }} />
    },
    {
      stats: total,
      color: 'info',
      title: 'Total',
      icon: <ChartBoxOutline sx={{ fontSize: '1.75rem' }} />
    }
  ]

  const renderStats = () => {
    return salesData.map((item: DataType, index: number) => (
      <Grid item xs={12} sm={3} md={3} lg={3} key={index}>
        <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            variant='rounded'
            sx={{
              mr: 3,
              width: 44,
              height: 44,
              boxShadow: 3,
              color: 'common.white',
              backgroundColor: `${item.color}.main`
            }}
          >
            {item.icon}
          </Avatar>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='caption'>{item.title}</Typography>
            <Typography variant='h6'>{item.stats}</Typography>
          </Box>
        </Box>
      </Grid>
    ))
  }
  
  return (
    <Card>
      <CardHeader titleTypographyProps={{ variant: 'h4', align:'center'}}
        title='Obreros'
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[3, 0]}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default StatisticsCard
