// ** MUI Imports
import Grid from '@mui/material/Grid'


// ** Demo Components Imports
import PersonalView from 'src/views/personal/personal_view'

const FormLayouts = () => {
  return (
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <PersonalView/>
        </Grid>
      </Grid>
  )
}

export default FormLayouts
