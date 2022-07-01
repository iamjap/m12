// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import Table from 'src/views/secciones/ceigma/Table'
import StatisticsCard from 'src/views/secciones/ceigma/StatisticsCard'
import DepositWithdraw from 'src/views/secciones/ceigma/DepositWithdraw'

const Dashboard = () => {
  return (
      <Grid container spacing={6}>
        <Grid item xs={12} md={12} lg={12}>
          <StatisticsCard />
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <DepositWithdraw />
        </Grid>
      </Grid>
    
  )
}

export default Dashboard
