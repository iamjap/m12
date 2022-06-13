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
import HumanDolly from 'mdi-material-ui/HumanDolly'
import Baguette  from 'mdi-material-ui/Baguette'
import ChartBoxOutline from 'mdi-material-ui/ChartBoxOutline'
import Briefcase from 'mdi-material-ui/Briefcase'
import HumanMaleBoard from 'mdi-material-ui/HumanMaleBoard'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

interface DataType {
  stats: string
  title: string
  color: ThemeColor
  icon: ReactElement
}

const salesData: DataType[] = [
  {
    stats: '45',
    title: 'Docente',
    color: 'success',
    icon: <HumanMaleBoard sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '6',
    color: 'error',
    title: 'Administrativo',
    icon: <Briefcase sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '12',
    color: 'warning',
    title: 'Obrero',
    icon: <HumanDolly sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '10',
    color: 'primary',
    title: 'Cocinera',
    icon: <Baguette  sx={{ fontSize: '5 rem' }} />
  },
  {
    stats: '83',
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

const StatisticsCard = () => {
  return (
    <Card>
      <CardHeader titleTypographyProps={{ variant: 'h4', align:'center'}}
        title='Datos generales'
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
