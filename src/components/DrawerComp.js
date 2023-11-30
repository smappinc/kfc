import { Drawer, Badge, IconButton, Button, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useMyContext } from './Context';

const DrawerComp = () => {

    const { cart } = useMyContext();
    const [open, setOpen] = useState(false);
    const handleItemClick = (path) => {
        setOpen(false); // Use history.push to navigate to the specified path
    };

    return (
        <>
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
                                <ListItemText>Help</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    </Link>

                    <Link to={'/login'} style={{ textDecoration: 'none' }}>
                        <ListItemButton onClick={() => setOpen(false)}>
                            <ListItemIcon>
                                <ListItemText>Login</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    </Link>

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