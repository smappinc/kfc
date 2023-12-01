import React from 'react'
import { BigMeal } from "../assets/data/data";
import { Link } from 'react-router-dom'
import { useMyContext } from '../components/Context';
import { Box, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'
import Footer from '../components/Footer';


const BBigMeals = () => {

    // cart context
    const { cart, setCart } = useMyContext();
    function addToCart(item) {

        // Check if the item is already in the cart
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            // If the item is already in the cart, increase the quantity
            const updatedCart = cart.map((cartItem) =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            );
            setCart(updatedCart);
        } else {
            // If the item is not in the cart, add it with quantity 1
            setCart([...cart, { ...item, quantity: 1 }]);
        }

        // Show alert
        alert("Item Added to Cart 💀");
    }

    // error fail safe
    if (!BigMeal) {
        console.log("Data: ", BigMeal);
        return <p>Loading...</p>; // or handle the loading state in another way
    }

    return (
        <>

            {/* Designing the items to be listed using MUI */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>

                {/* Title of the page */}
                <Typography variant='h4' sx={{ color: "#213b5e", m: 2 }}>
                    Family Size Combos
                </Typography>

                {/* Menu card items */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {BigMeal.map(item => (
                        <div className="relative" key={item.id}>
                            <Card key={item.id} sx={{ minWidth: '450px', display: 'flex', m: 3, minHeight: '400px' }}>

                                {/* The whole card is clickable so we handle clicks here */}
                                <Link key={item.id} onClick={() => addToCart(item)} className='group'>
                                    <CardActionArea sx={{ maxWidth: '450px' }}>
                                        <CardMedia
                                            sx={{ minHeight: '400px' }}
                                            component={'img'}
                                            src={item.image}
                                            alt={item.name}
                                        />

                                        <CardContent>
                                            {/* NOTE: removed fontweight: 600 */}
                                            <button className="hidden group-hover:block absolute uppercase p-2 rounded-md right-0 bg-[#c11430] text-white ring-0 ring-[#213b5e]" >Add to Cart</button>
                                            <Typography variant='h5' gutterBottom component='div' sx={{ color: "#213b5e" }}>{item.name}</Typography>
                                            <Typography variant='body1' sx={{ fontWeight: "600", color: "#213b5e" }}> Price: UGX {item.price}</Typography>
                                            <Typography variant='body2'>{item.desc}</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Link>
                            </Card>
                        </div>
                    ))}
                </Box>
            </Box>

            <div style={{ marginTop: '100px' }}>
                <Footer />
            </div>

        </>
    );
};

export default BBigMeals