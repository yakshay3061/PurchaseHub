import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router';
import api from '../api/axios';
import { Container } from '@mui/material';


// TODO remove, this demo shouldn't need to reset the theme.


export default function Login() {
  const navigate = useNavigate();
  const logUser = (data) => {

    api.post('/login', data).then(res => {

      // if(res.status==400){

      // console.log('User already exists');

      // }
      if (res.status === 400) {

        console.log('login in Falied');

        navigate("/login");

      }
      sessionStorage.setItem("access-token", res.data.AccessToken);

      console.log('log in Successful');
      navigate("/");

    }).catch(err => {

      navigate("/login");

      console.log(err);

    })

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    console.log({
      email: email,
      password: password,
    });

    logUser({ email, password });

  };

  return (

    <Container component="main" maxWidth="md" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>

      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: 2,
          p: 2,

        }}
      >
        <Avatar sx={{ m: 1, bgcolor: (theme) => theme.palette.primary['main'] }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login From Here
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          <Grid container>

            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Card>

    </Container>

  );
}