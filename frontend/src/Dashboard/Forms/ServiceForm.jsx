import React, { useState } from 'react'
import api from '../../api/axios';
import { Container, TextField, Button, Box,FormControl, Card ,InputLabel,Select,MenuItem, TextareaAutosize, Input} from '@mui/material';
import { useLocation } from 'react-router-dom';


export default function Details() {
  const ser = useLocation().state;
  console.log(ser);
  const [service, setService] = useState(ser.servicename);
  const [plan, setPlan] = useState(ser.plan);
  const [des, setDes] = useState(ser.description);
  const [price, setPrice] = useState(ser.price);
  const [process, setProcess] = useState('Edit');
  const [read, setRead] = useState(true);
  const handleChange = (e, handler) => {
    console.log(e.target.value);
    handler(e.target.value);
  }

  const handleSubmit = async () => {
    if (service !== '' && plan !== "" && price && des!=="") {
      try {
        const resp = await api.patch(`/api/updateService/${ser._id}`, {
          productId:ser.productId, servicename:service, description:des, plan:plan, price:price, priceId:ser.priceId, duration:ser.duration
        });
        alert('Service Updated Successfully');

        console.log(resp);
        setRead(!read)
      }
      catch (e) {
        alert(e.message);
      }
    }
  }


  const handleClick = (e) => {
    if (read) {
      setRead(false)
      console.log('read changed to ' + read)
      setProcess('Cancel')
    }
    else {

      setService(ser.servicename)
      setPlan(ser.plan)
      setDes(ser.description)
      setPrice(ser.price)
      setRead(true)
      setProcess('Edit')
    }
  }
  return (
    <Container component="main"  sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 6, width:"90vw" ,minWidth:"300px"}}>
      <Card sx={{p:4}}>
        <TextField
          required
          fullWidth
          InputProps={{
            readOnly: read,
          }}
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
          InputProps={{
            readOnly: read,
          }}
          onChange={(e) => (!read)?handleChange(e, setPlan):""}
        >
          <MenuItem value={"Basic"}>Basic</MenuItem>
          <MenuItem value={"Standard"}>Standard</MenuItem>
          <MenuItem value={"Plus"}>Plus</MenuItem>
        </Select>
      </FormControl>
        <TextField
          required
          fullWidth
          InputProps={{
            readOnly: true,
          }}
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
          InputProps={{
            readOnly: read,
          }}
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
          <Button variant='contained' onClick={handleClick} sx={{ flexGrow: 1 }}>{process}</Button>
          <Button hidden={read} variant='contained' onClick={handleSubmit} sx={{
            display: (read) ? "none" : "initial", flexGrow: 1, ml: 4
          }}>Submit</Button>
        </Box>
      </Card>
    </Container>
  )
}
