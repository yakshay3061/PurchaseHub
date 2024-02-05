import React, { useState } from 'react'
import api from '../../api/axios';
import { Container, TextField, Button, Box,Switch,FormControlLabel, Card } from '@mui/material';
import { useLocation } from 'react-router-dom';


export default function Details() {
  const user = useLocation().state;
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [admin, setAdmin] = useState(user.isAdmin);
  const [superAdmin, setSuperAdmin] = useState(user.isSuperAdmin);

  const [password, setPassword] = useState("");
  const [process, setProcess] = useState('Edit');
  const [read, setRead] = useState(true);
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
        const resp = await api.patch(`/api/updateUser/${user._id}`, {
          name: name,
          email: email,
          password: password,
          isAdmin:admin,
          isSuperAdmin:superAdmin
        });
        alert('User Updated Successfully');

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

      setName(user.name)
      setEmail(user.email)
      setPassword("")
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
          InputProps={{
            readOnly: read,
          }}
          id="outlined-email-input"
          label="Email"
          value={email}
          onChange={(e) => handleChange(e, setEmail)}
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
          id="outlined-password"
          label="Password"
          value={password}
          onChange={(e) => handleChange(e, setPassword)}
          sx={{
            display: (read) ? "none" : "initial",
            mb: 3
          }}
        />
        <Box sx={{ display: "flex", width: "100%" ,mb:3,mt:3, display: (read) ? "none" : "initial"}} >
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
          <Button variant='contained' onClick={handleClick} sx={{ flexGrow: 1 }}>{process}</Button>
          <Button hidden={read} variant='contained' onClick={handleSubmit} sx={{
            display: (read) ? "none" : "initial", flexGrow: 1, ml: 4
          }}>Submit</Button>
        </Box>
      </Card>
    </Container>
  )
}
