import { AppBar, Badge, Box, Button, Toolbar } from '@mui/material';
import React from 'react';
import NavBarImage from '../assets/images/KFC_Wordmark_RGB_White+Rectangle.jpg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DrawerComp from './DrawerComp';
import { Link } from 'react-router-dom';
import { useMyContext } from './Context';

const NavBar = () => {

    const {cart} = useMyContext();

    return (
        <AppBar position='static' style={{ background: 'white', maxHeight: '70px', color: 'black' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

                <Link to='/'>
                    <img
                        src={NavBarImage} alt='navbar image'
                        style={{ maxWidth: '100%', maxHeight: '50px' }} />
                </Link>

                {/* Added invisible text
                <Link to={'/'} style={{ textDecoration: 'none', color: 'black',  }}>
                    <Typography variant='h5' color='inherit'>Go Home</Typography>
                </Link>  */}

                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                    <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
                        <Button color='inherit'>Home</Button>
                    </Link>

                    <Link to={'/menu'} style={{ textDecoration: 'none', color: 'black' }}>
                        <Button color='inherit'>Menu</Button>
                    </Link>

                    <Link to={'/help'} style={{ textDecoration: 'none', color: 'black' }}>
                        <Button color='inherit'>Help</Button>
                    </Link>

                    <Link to={'/login'} style={{ textDecoration: 'none', color: 'black' }}>
                        <Button color='inherit'>Login</Button>
                    </Link>

                    <Link to={'/cart'}>
                        <Badge badgeContent={cart?.length||"0"} sx={{ fontSize: '1.5rem'}} color='error'>
                            <Button variant='contained' style={{ backgroundColor: '#c11430' }} startIcon={<ShoppingCartIcon />}>Cart</Button>
                        </Badge>
                    </Link>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <DrawerComp />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar