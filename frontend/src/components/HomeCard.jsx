import React from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionsArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import { useNavigate} from 'react-router-dom';

function HomeCard({service}) {
    const navigate=useNavigate();
    const handleClick=(e)=>{
        
    navigate(`/plans/${service}`);
    }
  return (
    <Card
    sx={{ height: '100%', display: 'flex', flexDirection: 'column' ,p:3}}
    onClick={handleClick} >
  <CardActionsArea   >
   
    <CardContent sx={{ flexGrow: 1 ,textAlign:'center'}}>
      <Typography gutterBottom variant="h3" component="h1">
        {service}
      </Typography>
    </CardContent>
    <CardActions sx={{width:"100%"}}>
     
     <Button variant="contained" fullWidth>See Plans</Button>

    </CardActions>
    </CardActionsArea>
  </Card>
  
  )
}

export default HomeCard
