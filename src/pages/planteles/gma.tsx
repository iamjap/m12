// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab, { TabProps } from '@mui/material/Tab'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'

// ** Icons Imports
import FolderInformation  from 'mdi-material-ui/FolderInformation'
import AccountSchool from 'mdi-material-ui/AccountSchool'
import AccountHardHat from 'mdi-material-ui/AccountHardHat'

// ** Demo Tabs Imports

import Tablagma1 from 'src/views/planteles/gma1'
import CardCifras from 'src/views/planteles/gma2'
import CardPersonal from 'src/views/planteles/gma3'
import CardInfo from 'src/views/planteles/gma4'


// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const Tab = styled(MuiTab)<TabProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const AccountSettings = () => {
  // ** State
  const [value, setValue] = useState<string>('plantel')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='account-settings tabs'
          sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value='plantel'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <FolderInformation/>
                <TabName>Información del plantel</TabName>
              </Box>
            }
          />
          <Tab
            value='matricula'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountSchool />
                <TabName>Estadisticas de matrícula</TabName>
              </Box>
            }
          />
          <Tab
            value='personal'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountHardHat/>
                <TabName>Estadisticas de personal</TabName>
              </Box>
            }
          />
        </TabList>

        <TabPanel sx={{ p: 0 }} value='plantel'>        
        <CardInfo/>
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='matricula'>
        <Grid><CardCifras/></Grid>          
        <Grid><CardHeader title='Matricula por sección' titleTypographyProps={{ variant: 'h4', align:'center'}} />
          <Tablagma1/></Grid>
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='personal'>
          <CardPersonal/>
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default AccountSettings