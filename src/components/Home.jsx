// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Stack, IconButton, Avatar, Menu, MenuItem, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Profile from '../pages/Profile';
import Footer from "./Footer";

const Home = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const images = [
    "/female-confectioner-with-strawberry-cake-pastry-shop.jpg",
    
    "/pretty-european-positive-smiling-woman-summer-flying-dress-natural-day-light-villa-terrace-enjoying-beautiful-vacation-outdoor-sofa-with-pillows-tropical.jpg",
    "/courier-with-box-fruits.jpg",
    "/close-up-smiley-woman-holding-flowers.jpg",
    "/vegetable.jpeg",
    "/drink.jpeg"
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleProfileMenuClose = () => setAnchorEl(null);

  const handleNavClick = (path) => navigate(path);

  // Sample categories for Home page
  const categories = [
    { title: 'Cakes', link: '/cakes', color: '#ffcc80' },
    { title: 'Clothes', link: '/clothes', color: '#90caf9' },
    { title: 'Fruits', link: '/fruits', color: '#a5d6a7' },
    { title: 'Flowers', link: '/flowers', color: '#f48fb1' },
    { title: 'Vegetables', link: '/vegetables', color: '#81c784' },
    { title: 'Drinks', link: '/drinks', color: '#bcaaa4' },
  ];

  return (
    <>
      {/* Navbar like About page */}
      <AppBar position="static" sx={{ backgroundColor: '#000' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', cursor: 'pointer' }} onClick={() => handleNavClick('/')}>
            BuzzCart
          </Typography>

          

          <Stack direction="row" spacing={2}>
            <IconButton color="inherit" onClick={() => handleNavClick('/cart')}>
              <ShoppingCartIcon />
            </IconButton>
            <IconButton onClick={handleProfileMenuOpen} color="inherit">
              <Avatar sx={{ width: 30, height: 30 }}>U</Avatar>
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleProfileMenuClose}>
             <MenuItem 
                  onClick={() => { 
                    handleProfileMenuClose(); 
                    handleNavClick('/profile'); 
                  }}
                >
                  Profile
                </MenuItem>
             <MenuItem onClick={() => { handleProfileMenuClose(); handleNavClick('/'); }}>Logout</MenuItem>
            </Menu>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Main Home Content */}
      <Box sx={{ display: 'flex', width: '100%', minHeight: '100vh'}}>
        {/* Left side: changing images */}
        <Box sx={{ width: '30%', position: 'relative', overflow: 'hidden' }}>
          {images.map((img, index) => (
            <Box
              key={index}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: currentIndex === index ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
              }}
            />
          ))}
        </Box>

        {/* Right side: hero text + categories */}
        <Box sx={{ width: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 4, backgroundColor: '#444444ff' }}>
          <Typography variant="h3" sx={{ mb: 2,  color: 'white', fontFamily: 'arial', fontSize: '2.5rem', fontWeight: 'bold' }}>
            Welcome to BuzzCart
          </Typography>
          <Typography variant="h6" sx={{ mb: 14, color: '#adadadff', fontSize: '1rem' }}>
            Your stylish shop awaits! Explore categories below.
          </Typography>

          {/* Categories as buttons */}
          <Stack direction="row" spacing={3} flexWrap="wrap" >
            {categories.map((cat, idx) => (
              <Button
                key={idx}
                variant="contained"
                sx={{
                  backgroundColor: cat.color,
                  color: '#000',
                  fontWeight: 'bold',
                  mb: 2,
                  
                  '&:hover': { opacity: 0.8 },
                }}
                onClick={() => handleNavClick(cat.link)}
              >
                {cat.title}
              </Button>
            ))}
          </Stack>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
