// src/pages/TargetUsers.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Stack, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DevicesIcon from '@mui/icons-material/Devices';

const Users = () => {
  const navigate = useNavigate();

  const handleNavClick = (path) => navigate(path);

  const users = [
    {
      title: 'Shoppers',
      description: 'Find the best deals, compare products, and shop smarter.',
      icon: <ShoppingCartIcon sx={{ fontSize: 40, color: '#fff' }} />,
      color: '#ffcc00',
    },
    {
      title: 'Small Business Owners',
      description: 'Reach more customers and grow your business online.',
      icon: <StorefrontIcon sx={{ fontSize: 40, color: '#fff' }} />,
      color: '#00bcd4',
    },
    {
      title: 'Suppliers',
      description: 'Manage your products and connect with retailers efficiently.',
      icon: <LocalShippingIcon sx={{ fontSize: 40, color: '#fff' }} />,
      color: '#ff5722',
    },
    {
      title: 'Tech Enthusiasts',
      description: 'Discover innovative shopping experiences and new tools.',
      icon: <DevicesIcon sx={{ fontSize: 40, color: '#fff' }} />,
      color: '#8e24aa',
    },
  ];

  return (
    <>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: '#000' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            BuzzCart
          </Typography>
          <Stack direction="row" spacing={6}>
            <Button color="inherit" onClick={() => handleNavClick('/')}>Home</Button>
            <Button color="inherit" onClick={() => handleNavClick('/about')}>About Us</Button>
            <Button color="inherit" onClick={() => handleNavClick('/users')}>Target Users</Button>
            <Button color="inherit" onClick={() => handleNavClick('/contact')}>Contact Us</Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Page Content */}
      <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 14 }}>
          Our Target Users
        </Typography>

        {/* Horizontal line of circles */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'nowrap', // prevent wrapping
            gap: 6,
          }}
        >
          {users.map((user, index) => (
            <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: 1 }}>
              {/* Circle with Icon */}
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  backgroundColor: user.color,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mb: 5,
                  boxShadow: 3,
                }}
              >
                {user.icon}
              </Box>

              {/* Description */}
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                {user.title}
              </Typography>
              <Typography variant="body2">
                {user.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Users;
