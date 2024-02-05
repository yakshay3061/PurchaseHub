import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PricingCard from '../components/PricingCard';
import api from '../api/axios';
import axios from 'axios';

const URI = process.env.REACT_APP_BASE_URL;

const Plans = () => {
  const {service} = useParams();
  const [islogin,setLogin]=useState(false);
  const [plans,setPlans]=useState(0);

  useEffect(()=>{
    const token=sessionStorage.getItem('access-token')
    if (token){
      setLogin(true);
    }
    api.get(`/api/plans/${service}`).then(res=>{
      console.log(res.data.data)
      setPlans(res.data.data)
    });
 

  },[service])


  return (
    <div>
       <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h2"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          We Offer a Below Plans for {service}
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="lg" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {plans!==0 && plans.map((plan,idx) => (
         
            <Grid item key={idx} xs={12} md={4}>
            <PricingCard plan={plan} islogin={islogin}/>
            </Grid>
          ))}
        </Grid>
      </Container>
   
    </div>
  )
}

export default Plans