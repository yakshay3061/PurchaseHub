import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Container, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import axios from 'axios';

const URI = process.env.REACT_APP_BASE_URL;
// TODO remove, this demo shouldn't need to reset the theme.

export default function SignUp() {
    const navigate = useNavigate();
    const addUser = async(data) => {
        try{
            console.log(data);
            const res = await axios.post(URI + 'register',data);
            if (res.status === 500) {
                console.log('Signup in Falied');
                navigate("/signup");
            }
            sessionStorage.setItem("access-token", res.data.jwtToken);
            console.log('Sign up Successful');
            navigate("/");
        }catch(err){
            navigate("/signup");

            console.log(err);
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });

        addUser({ name: data.get('Name'), email: data.get('email'), password: data.get('password'), isadmin: true, issuperadmin: true });
    };

    return (
        <Container component="main" maxWidth="md" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }} >

            <Card
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: 2,
                    p: 2,

                }}
            >
                <Avatar sx={{ m: 1, bgcolor:'#4caf50' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Signup From Here
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <TextField
                                autoComplete="given-name"
                                name="Name"
                                required
                                fullWidth
                                id="Name"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                variant="filled"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                variant="filled"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>

                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, backgroundColor: '#4caf50'}}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Card>

        </Container>
    );
}