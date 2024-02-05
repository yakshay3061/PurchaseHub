import React from 'react'
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';



function TotalCard({ total, cart }) {
  const navigate = useNavigate()
  return (
    <Card>
      <CardHeader
        title="Amount To Be Paid"
        sx={{

          color: (theme) => theme.palette.secondary['main'],
          backgroundColor: (theme) =>
            theme.palette.primary['main'],

        }}
      />
      <CardContent>

        <Box sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <Box sx={{ py: 4 }}>
            <Typography component="h4" variant="h5" color="text.primary" >
              Total Cost :
            </Typography>

          </Box>


          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline',

          }}>
            <Typography component="h4" variant="h5" color="text.primary" >
              $ {total}
            </Typography>
          </Box>

        </Box>

     
    </CardContent>
    <CardActions>
      <Button fullWidth variant="outlined" sx={{py:1 ,border:3}} onClick={()=>navigate("/checkout",{state:cart})}>
        Proceed To checkout
      </Button>
    </CardActions>
  </Card>
  )
}


export default TotalCard
