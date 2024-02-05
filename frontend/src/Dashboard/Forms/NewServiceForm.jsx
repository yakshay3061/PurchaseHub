import React, { useState } from 'react'
import api from '../../api/axios';
import { Container, TextField, Button, Box,FormControl, Card ,InputLabel,Select,MenuItem, TextareaAutosize, Input} from '@mui/material';
import {  useNavigate } from 'react-router-dom';


export default function Details() {
  const navigate=useNavigate()
  const [service, setService] = useState("");
  const [plan, setPlan] = useState("Basic");
  const [des, setDes] = useState("");
  const [price, setPrice] = useState(0);

  const handleChange = (e, handler) => {
    console.log(e.target.value);
    handler(e.target.value);
  }

  const handleSubmit = async () => {
    if (service !== '' && plan !== "" && price && des!=="") {
      try {
        const resp = await api.post(`/api/addservice`, {
          servicename:service, description:des, plan:plan, price:price
        });
        

        alert("Added new Service Successfully")
        navigate('/dashboard/services')
      }
      catch (e) {
        alert(e.message);
      }
    }
  }

  return (
    <Container component="main"  sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 6, width:"90vw" ,minWidth:"300px"}}>
      <Card sx={{p:4}}>
        <TextField
          required
          fullWidth
         
          id="outlined-servce-input"
          label="Service Name"
          value={service}
          onChange={(e) => handleChange(e, setService)}
          sx={{
            mb: 3
          }}
        />
          <FormControl fullWidth sx={{mb:3}}>
        <InputLabel id="plans=service-label"
        
        >Plan</InputLabel>
        <Select
          labelId="plans=service-label"
          id="plans-service"
          value={plan}
          label="Plan"
          
          onChange={(e) =>handleChange(e, setPlan)}
        >
          <MenuItem value={"Basic"}>Basic</MenuItem>
          <MenuItem value={"Standard"}>Standard</MenuItem>
          <MenuItem value={"Plus"}>Plus</MenuItem>
        </Select>
      </FormControl>
        <TextField
          required
          fullWidth
          id="outlined-price-input"
          label="Price"
          value={price}
          type='number'
          onChange={(e) => handleChange(e, setPrice)}
          sx={{
            mb: 3
          }}
        />
        <TextField
          required
          fullWidth
          id="outlined-password-input"
          variant="outlined"
          value={des}
          label="Description"
          onChange={(e) => handleChange(e, setDes)}
          sx={{
            mb: 3
          }}
        />
      
        <Box sx={{ display: "flex", width: "100%"}} >
          <Button variant='contained' onClick={handleSubmit} sx={{ flexGrow: 1 }}>Submit</Button>
        </Box>
      </Card>
    </Container>
  )
}
