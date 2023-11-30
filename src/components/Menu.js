import React from 'react'
import { MenuCategories } from "../assets/data/data";
import { Link } from 'react-router-dom'
import { Box, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'
import Footer from './Footer';

const Menu = () => {

  if (!MenuCategories) {
    console.log("Data: ", MenuCategories);
    return <p>Loading...</p>; // or handle the loading state in another way
  }

  return (

    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
        {/* Title of the page */}
        <Typography variant='h4' sx={{ color: "#213b5e", m: 2 }}>
          Our Menu
        </Typography>

        {/* Menu card items */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {MenuCategories.map(item => (
            <div className="relative" key={item.id}>
              <Card key={item.id} sx={{ minWidth: '450px', display: 'flex', m: 3, minHeight: '400px' }}>
                <Link key={item.id} to={`${item.slug}`} className='group'>
                  <CardActionArea sx={{ maxWidth: '450px' }}>
                    <CardMedia
                      sx={{ minHeight: '400px' }}
                      component={'img'}
                      src={item.image}
                      alt={item.name}
                    />

                    <CardContent>
                      {/* NOTE: removed fontweight: 600 */}
                      <button className="hidden group-hover:block absolute uppercase p-2 rounded-md right-0 bg-[#c11430] text-white ring-0 ring-[#213b5e]" >Explore</button>
                      <Typography variant='h5' gutterBottom component='div' sx={{ color: "#213b5e" }}>{item.name}</Typography>
                      <Typography variant='body1' sx={{ color: "#213b5e" }}>{item.desc}</Typography>
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


export default Menu