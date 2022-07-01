// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from 'next/link'
import Router from 'next/router';
//import { useSession, signIn, signOut } from "next-auth/react"
import { getSession } from "next-auth/react";

import CardTwitter from 'src/views/cards/CardTwitter'
import CardFacebook from 'src/views/cards/CardFacebook'
import CardLinkedIn from 'src/views/cards/CardLinkedIn'
import CardSection from 'src/views/cards/CardSection'

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
    <Grid item xs={12} sm={6} md={4}>
    <Link href="/secciones" >
     <a style={{ textDecoration: 'none' }}><CardSection/></a> 
    </Link>
    </Grid>
  </Grid>
  )
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  console.log(session);

  if (!session) {
    return {
      redirect: {
        destination: "pages/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};


export default Dashboard






