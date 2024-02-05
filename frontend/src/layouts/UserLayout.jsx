import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useEffect } from 'react';
import { useState } from 'react';
import { decodeToken } from "react-jwt";
import { useNavigate } from 'react-router';
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import { Link } from '@mui/material';
// import logo from "../images/log2.png"


function UserLayout({ children }) {


    const [isadmin, setIsadmin] = useState(false);
    const [isSuperadmin, setIsSuperAdmin] = useState(false);
    const [isLogin, setIslogin] = useState(false);
    const [name, setName] = useState("");

    const navigate = useNavigate();


    useEffect(() => {


        const token = sessionStorage.getItem('access-token');

        console.log(token);

        if (token) {
            setIslogin(true);

            const data = decodeToken(token);

            //token decode
            console.log(data);


            if (data.isAdmin) setIsadmin(true);
            if (data.isSuperAdmin) setIsSuperAdmin(true);

            // check for isadmin or issuperAdmin
            setName(name);


        }





    },);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <AppBar position="sticky">
                <Container maxWidth="xl">
                    <Toolbar >
                        {/* <img src={logo} alt="" height={50} width={50} /> */}
                        <Typography
                            variant="h6"
                            component="a"
                            href="/home"
                            sx={{
                                mr: 0,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: "yellow",
                                textDecoration: 'none',
                            }}
                        >
                            SAASGo
                        </Typography>

                        <Typography
                            variant="h5"

                            component="a"
                            href="/home"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            SAAS
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex' }, px: 3 }}>
                            <MenuItem sx={{ px: 4 }}>
                                <Link href="/home" textAlign="center" sx={{ color: (theme) => theme.palette.secondary['main'] }}>Home</Link>
                            </MenuItem>
                        </Box>

                        {isLogin ? <> <Box sx={{ flexGrow: 0.02, px: 1 }}>
                            <Tooltip title="Open settings" >
                                <IconButton onClick={handleOpenUserMenu} >
                                    <Avatar sx={{ backgroundColor: (theme) => theme.palette.common['grey'] }} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >



                                {isadmin && <>  <MenuItem ><Typography textAlign="center" onClick={() => {


                                    navigate('/dashboard/users')
                                }}> Dashboard Users</Typography>  </MenuItem>

                                    {isSuperadmin && <MenuItem > <Typography
                                        onClick={() => {


                                            navigate('/dashboard/services')
                                        }}
                                        textAlign="center">Dashboard Service</Typography>  </MenuItem>}
                                </>}

                                <MenuItem >
                                    <Typography onClick={() => {
                                        sessionStorage.removeItem('access-token');
                                        setIslogin(false);
                                        handleCloseUserMenu();
                                        navigate('/home');


                                    }} textAlign="center">Log out</Typography>

                                </MenuItem>

                            </Menu>

                        </Box>
                            <IconButton color='inherit' sx={{ backgroundColor: (theme) => theme.palette.common['grey'] }} onClick={() => navigate('/cart')} >
                                <LocalMallSharpIcon sx={{ fontSize: 25 }} />
                            </IconButton>
                        </>
                            : <><Button
                                href='/signup'
                                variant="h6"

                                component="a"

                                sx={{
                                    mr: 0,
                                    display: { xs: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                SignUp
                            </Button><Button
                                href='/login'
                                variant="h6"
                                noWrap
                                component="a"
                                sx={{
                                    mr: 0,
                                    display: { xs: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                    LogIn
                                </Button>
                            </>}
                    </Toolbar>
                </Container>
            </AppBar>
            {children}
        </>
    );
}
export default UserLayout;