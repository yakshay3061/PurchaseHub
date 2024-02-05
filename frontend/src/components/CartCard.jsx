import React from 'react'
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import api from '../api/axios';



function CartCard({ item, handleDelete }) {

  const deleteItem = async (e) => {
    const token = sessionStorage.getItem('access-token');
    const res = await api.delete(`api/removeitem/${item._id}`, { headers: { "Authorization": token } });

    if (res.data.success) {
      handleDelete(token)
    }
    else {
      alert("unable to remove")
    }
  }
  return (
    <Card>
      <CardHeader
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
          <Box >
            <Typography component="h4" variant="h5" color="text.primary" >
              {item.servicename}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {item.plan}
            </Typography>
          </Box>


          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline',

          }}>
            <Typography component="h4" variant="h5" color="text.primary" >
              ${item.price}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              /month
            </Typography>
          </Box>

        </Box>


      </CardContent>
      <CardActions>
        <Button fullWidth variant="contained" onClick={deleteItem} >
          Remove Item
        </Button>
      </CardActions>
    </Card>
  )
}

export default CartCard
