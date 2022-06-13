// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from 'next/link'

import CardTwitter from 'src/views/cards/CardTwitter'
import CardFacebook from 'src/views/cards/CardFacebook'
import CardLinkedIn from 'src/views/cards/CardLinkedIn'

const Dashboard = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6} md={4}>
      <Link href="/planteles" >
       <a style={{ textDecoration: 'none' }}><CardTwitter/></a> 
      </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardFacebook />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardLinkedIn />
      </Grid>
    </Grid>
  )
}

export default Dashboard

