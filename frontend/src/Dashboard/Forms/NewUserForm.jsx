import React, { useState } from 'react'
import api from '../../api/axios';
import { Container, TextField, Button, Box,Switch,FormControlLabel, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function Details() {
  const navigate=useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState(false);
  const [superAdmin, setSuperAdmin] = useState(false);

  const [password, setPassword] = useState("");
  const [process, setProcess] = useState('Edit');
 
  const handleChange = (e, handler) => {
    console.log(e.target.value);
    handler(e.target.value);
  }

  const handleCheckedChange = (event,handler) => {
    handler(event.target.checked);
  };


  const handleSubmit = async () => {
    if (name !== '' && email !== "" && password !== "") {
      try {
        const resp = await api.post(`/register`, {
          name: name,
          email: email,
          password: password,
          isadmin:admin,
          issuperadmin:superAdmin
        });
        alert('User Updated Successfully');

        console.log(resp);
        navigate('/dashboard/users')
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
         
          id="outlined-name-input"
          label="Name"
          value={name}
          onChange={(e) => handleChange(e, setName)}
          sx={{
            mb: 3
          }}
        />
        <TextField
          required
          fullWidth
          
          id="outlined-email-input"
          label="Email"
          value={email}
          onChange={(e) => handleChange(e, setEmail)}
          sx={{
            mb: 3
          }}
        />
        <TextField
         
          required
          fullWidth
          id="outlined-password-input"
          label="Password"
          value={password}
          onChange={(e) => handleChange(e, setPassword)}
          sx={{
            mb: 3
          }}
        />
        <Box sx={{ display: "flex", width: "100%" ,mb:3,mt:3}} >
        <FormControlLabel
          control={
            <Switch checked={admin} onChange={(e)=>handleCheckedChange(e,setAdmin)} name="admin" />
          }
          label="Admin"
        />
           <FormControlLabel
          control={
            <Switch checked={superAdmin} onChange={(e)=>handleCheckedChange(e,setSuperAdmin)} name="superadmin" />
          }
          label="SuperAdmin"
        />
        </Box>

        <Box sx={{ display: "flex", width: "100%"}} >
          <Button  variant='contained' onClick={handleSubmit} sx={{flexGrow: 1}}>Submit</Button>
        </Box>
      </Card>
    </Container>
  )
}
