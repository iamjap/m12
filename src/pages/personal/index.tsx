// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import Table from 'src/views/personal/Table'

const MUITable = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          <Link>
            Planteles del circuito 12
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <Table/>
        </Card>
      </Grid>     
    </Grid>
  )
}

export default MUITable
