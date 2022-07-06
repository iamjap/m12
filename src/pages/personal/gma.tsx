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
import HumanDolly from 'mdi-material-ui/HumanDolly'
import Baguette  from 'mdi-material-ui/Baguette'
import Briefcase from 'mdi-material-ui/Briefcase'
import HumanMaleBoard from 'mdi-material-ui/HumanMaleBoard'

// ** Demo Tabs Imports

import Docente from 'src/views/personal/docente'
import CardDocente from 'src/views/personal/docenteCard'

import Obrero from 'src/views/personal/obrero'
import CardObrero from 'src/views/personal/obreroCard'

import Administrativo from 'src/views/personal/administrativo'
import CardAdministrativo from 'src/views/personal/administrativoCard'

import Cocinera from 'src/views/personal/cocinera'
import CardCocinera from 'src/views/personal/cocineraCard'

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
  const [value, setValue] = useState<string>('docente')

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
            value='docente'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <HumanMaleBoard/>
                <TabName>Docente</TabName>
              </Box>
            }
          />
          <Tab
            value='obrero'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <HumanDolly/>
                <TabName>Obrero</TabName>
              </Box>
            }
          />
          <Tab
            value='administrativo'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Briefcase/>
                <TabName>Administrativo</TabName>
              </Box>
            }
          />
          <Tab
            value='cocinera'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Baguette/>
                <TabName>Cocinera</TabName>
              </Box>
            }
          />
        </TabList>

        <TabPanel sx={{ p: 0 }} value='docente'>        
        <Grid><CardDocente/></Grid>            
        <Grid><Docente/></Grid>
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='obrero'>
        <Grid><CardObrero/></Grid>            
        <Grid><Obrero/></Grid>
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='administrativo'>
        <Grid><CardAdministrativo/></Grid>            
        <Grid><Administrativo/></Grid> 
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='cocinera'>
        <Grid><CardCocinera/></Grid>            
        <Grid><Cocinera/></Grid> 
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default AccountSettings