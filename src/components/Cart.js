import React from 'react';
import { useMyContext } from './Context';
import { Button, List, ListItem, ListItemText, Typography, CardMedia } from '@mui/material';
import Footer from './Footer';

const Cart = () => {
    const { cart, setCart } = useMyContext();

    // Function to increase the quantity of an item in the cart
    const increaseQuantity = (item) => {
        const updatedCart = cart.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
        setCart(updatedCart);
    };

    // Function to decrease the quantity of an item in the cart
    const decreaseQuantity = (item) => {
        const updatedCart = cart.map((cartItem) =>
            cartItem.id === item.id && cartItem.quantity > 1
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        );
        setCart(updatedCart);
    };

    // Function to remove an item from the cart
    const removeFromCart = (item) => {
        const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
        setCart(updatedCart);
    };

    return (
        <>
            <div>
                <Typography variant="h4" sx={{ color: "#213b5e", m: 2, textAlign: 'center' }}>
                    KFC Shopping Cart
                </Typography>
                {cart.length === 0 ? (
                    <Typography variant="body1" sx={{ color: "#213b5e", textAlign: 'center' }}>
                        Your cart is empty.
                    </Typography>
                ) : (
                    <List>
                        {cart.map((item) => (
                            <ListItem key={item.id}>
                                <CardMedia
                                    sx={{ maxHeight: '50px', maxWidth: '50px' }}
                                    component="img"
                                    alt={item.name}
                                    image={item.image} // Add the property containing the image source
                                />
                                <ListItemText
                                    primary={item.name}
                                    secondary={`Price: UGX ${item.price * item.quantity} | Quantity: ${item.quantity}`}
                                />
                                <Button variant='contained' onClick={() => increaseQuantity(item)}>+</Button>
                                <Button variant='outlined' onClick={() => decreaseQuantity(item)}>-</Button>
                                <Button variant='contained' onClick={() => removeFromCart(item)}>Remove</Button>
                            </ListItem>
                        ))}
                    </List>
                )}
            </div>

            <div style={{ marginTop: '700px'}}>
                <Footer />
            </div>
        </>
    );
};

export default Cart;
