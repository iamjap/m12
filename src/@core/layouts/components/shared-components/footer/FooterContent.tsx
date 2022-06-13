// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'right' }}>
      <Typography sx={{ mr: 2 }}>
        {`© 2022, Hecho con `}
        <Box component='span' sx={{ color: 'error.main' }}>
          ❤️
        </Box>
        {` por `} 
        <Box component='span' color='#9155FD'>
           {'Circuito 12'} 
        </Box>
      </Typography>    
    </Box>
  )
}

export default FooterContent
