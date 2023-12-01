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

        // Show alert
        alert("Item removed💀");
    };

    return (
        <>
            <div>

                {/* TItle of the page */}
                <Typography variant="h4" sx={{ color: "#213b5e", m: 2, textAlign: 'center' }}>
                    KFC Shopping Cart
                </Typography>

                {/* If the cart is empty show cart is empty, else show items added to cart */}
                {cart.length === 0 ? (
                    <Typography variant="body1" sx={{ color: "#213b5e", textAlign: 'center' }}>
                        Your cart is empty.
                    </Typography>
                ) : (
                    <List>

                        {/* Mapping items */}
                        {cart.map((item) => (
                            <ListItem key={item.id}>
                                <CardMedia
                                    sx={{ maxHeight: '50px', maxWidth: '50px' }}
                                    component="img"
                                    alt={item.name}
                                    image={item.image} // Add the property containing the image source
                                />
                                <ListItemText
                                    primary={
                                        <Typography variant="h6" style={{ fontSize: '1.5rem', marginLeft: '10px' }}>
                                            {item.name}
                                        </Typography>
                                    }
                                    secondary={
                                        <Typography variant="body2" style={{ fontSize: '1rem', marginLeft: '10px' }}>
                                            Price: UGX {item.price * item.quantity} | Quantity: {item.quantity}
                                        </Typography>
                                    }
                                />

                                {/* Buttons to increase, decrease and remove items in cart */}
                                <Button variant='contained' style={{ backgroundColor: '#c11430' }} onClick={() => increaseQuantity(item)}>+</Button>
                                <Button variant='outlined' onClick={() => decreaseQuantity(item)}>-</Button>
                                <Button variant='contained' style={{ backgroundColor: '#c11430' }} onClick={() => removeFromCart(item)}>Remove</Button>
                            </ListItem>
                        ))}
                    </List>
                )}
            </div>

            {/* Adding the footer component to the page */}
            <div style={{ marginTop: '700px' }}>
                <Footer />
            </div>
        </>
    );
};

export default Cart;
