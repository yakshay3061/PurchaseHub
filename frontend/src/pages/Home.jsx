import React ,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import HomeCard from '../components/HomeCard';
import api from '../api/axios';

export default function Home() {
  const [services, setServices] = useState(0);
  useEffect(() => {
    api.get('/api/services').then(res=>{
      setServices(res.data);
    }).catch(error=>{
      console.log(error)
    })
  
    
  },[])
  
  return (
    
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            py: 4,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
                Services Offered
            </Typography>
           
           
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {services!==0 && services.map((service,idx) => (
              <Grid key={idx} item xs={12} sm={6} md={4}>
                <HomeCard service={service}/>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

  );
}