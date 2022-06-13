// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import Heart from 'mdi-material-ui/LocationEnter'
import ShareVariant from 'mdi-material-ui/BankOutline'

const CardTwitter = () => {
  return (
    <Card sx={{ border: 0, boxShadow: 0, color: 'common.white', backgroundColor: 'info.main' }}>
      <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
        <Typography
          variant='h5'
          sx={{ display: 'flex', marginBottom: 2.75, alignItems: 'center', color: 'common.white'}}
        >
          {'Planteles'}
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
            <ShareVariant sx={{ width: 34, height: 34, marginRight: 2.75 }} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>            
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Heart sx={{ marginRight: 1.25 }} />
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardTwitter
