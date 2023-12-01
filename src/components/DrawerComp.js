/**
 * This component is used for smaller devices, specifically mobile devices and
 * only shows on those devices
 */

import { Drawer, Badge, IconButton, Button, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useMyContext } from './Context';
import { useAuth0 } from '@auth0/auth0-react';

const DrawerComp = () => {

    const { cart } = useMyContext();
    const [open, setOpen] = useState(false);

    // Auth to handle when a user is authenticated or not
    const { isAuthenticated, logout } = useAuth0();

    const handleItemClick = (path) => {
        setOpen(false); // Use history.push to navigate to the specified path
    };

    return (
        <>
            {/* Drawer from MUI */}
            <Drawer anchor='bottom' open={open} onClose={() => setOpen(false)} >

                <List>

                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <ListItemButton onClick={() => setOpen(false)}>
                            <ListItemIcon>
                                <ListItemText>Home</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    </Link>


                    <Link to={'/menu'} style={{ textDecoration: 'none' }}>
                        <ListItemButton onClick={() => setOpen(false)}>
                            <ListItemIcon>
                                <ListItemText>Menu</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    </Link>

                    <Link to={'/help'} style={{ textDecoration: 'none' }}>
                        <ListItemButton onClick={() => setOpen(false)}>
                            <ListItemIcon>
                                <ListItemText>About</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    </Link>

                    {/* Check if user is authenticated and show Logout, else show Login */}
                    {isAuthenticated ? <Button color='inherit' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</Button>
                        :
                        <Link to={'/login'} style={{ textDecoration: 'none' }}>
                            <ListItemButton onClick={() => setOpen(false)}>
                                <ListItemIcon>
                                    <ListItemText>Login</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        </Link>
                    }

                    <Link to={'/cart'} style={{ textDecoration: 'none', color: 'white' }}>
                        <Badge badgeContent={cart?.length || "0"} sx={{ fontSize: '1.5rem' }} color='error'>
                            <Button variant='contained' size='small' sx={{ backgroundColor: '#c11430' }} onClick={() => setOpen(false)}>
                                <ListItemText>Cart</ListItemText>
                            </Button>
                        </Badge>
                    </Link>

                </List>

            </Drawer>
            <IconButton onClick={() => setOpen(!open)}>
                <Button variant='contained' sx={{ backgroundColor: '#c11430' }} startIcon={<MenuIcon />} />
            </IconButton>
        </>
    );
};

export default DrawerComp