// src/pages/About.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Stack, Container, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DevicesIcon from '@mui/icons-material/Devices';
import StorefrontIcon from '@mui/icons-material/Storefront';

const About = () => {
  const navigate = useNavigate();

  const handleNavClick = (path) => navigate(path);

  const features = [
    {
      title: 'Wide Selection',
      description: 'We offer a variety of products across multiple categories.',
      icon: <ShoppingCartIcon sx={{ fontSize: 40, color: '#fff' }} />,
      color: '#ffcc00',
    },
    {
      title: 'Small Business Support',
      description: 'We help local businesses reach more customers easily.',
      icon: <StorefrontIcon sx={{ fontSize: 40, color: '#fff' }} />,
      color: '#00bcd4',
    },
    {
      title: 'Fast Delivery',
      description: 'Our delivery partners ensure your orders arrive on time.',
      icon: <SupportAgentIcon sx={{ fontSize: 40, color: '#fff' }} />,
      color: '#ff5722',
    },
    {
      title: 'Tech-Driven',
      description: 'We use technology to provide a smooth shopping experience.',
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

      {/* Hero Image */}
      <Box
        sx={{
          width: '100%',
          height: '400px',
          backgroundImage: 'url("ab1ca834e5439aad79f37abd6cd30311.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* About Intro */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
          About BuzzCart
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', mb: 10 }}>
          BuzzCart is your one-stop online marketplace connecting local businesses with customers nationwide. 
          We believe in empowering small vendors and providing customers with access to a wide variety of 
          high-quality products at affordable prices.
        </Typography>
      </Container>

      {/* Features */}
      <Container maxWidth="lg" sx={{ mb: 14 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap' }}>
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                flex: 1,
              }}
            >
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  backgroundColor: feature.color,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mb: 3,
                  boxShadow: 3,
                }}
              >
                {feature.icon}
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                {feature.title}
              </Typography>
              <Typography variant="body2">{feature.description}</Typography>
            </Box>
          ))}
        </Box>
      </Container>

{/* Mission & Vision */}
<Box sx={{ backgroundColor: '#00bcd4', py: 8 }}>
  <Container maxWidth="lg">
    <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
      {/* Mission Block */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: '#fff',
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          minWidth: 300, // ensures responsiveness
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Our Mission
        </Typography>
        <Typography variant="body1">
          To connect people with the products they love while supporting local communities and
          small businesses through innovative technology and customer-focused services.
        </Typography>
      </Box>

      {/* Vision Block */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: '#fff',
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          minWidth: 300,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Our Vision
        </Typography>
        <Typography variant="body1">
          To become the most trusted and customer-friendly e-commerce platform in the country,
          where shopping is easy, affordable, and enjoyable for everyone.
        </Typography>
      </Box>
    </Box>
  </Container>
</Box>

{/* Comments Section */}
<Box sx={{ backgroundColor: '#f5f5f5', py: 8 }}>
  <Container maxWidth="lg">
    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
      What People Say
    </Typography>

    <Box
      sx={{
        display: 'flex',
        overflowX: 'auto',
        gap: 3,
        pb: 2,
        '&::-webkit-scrollbar': { height: 8 },
        '&::-webkit-scrollbar-thumb': { backgroundColor: '#ccc', borderRadius: 4 },
        '&::-webkit-scrollbar-track': { backgroundColor: '#f0f0f0' },
      }}
    >
      {[
        { name: 'Alice Gomezz', comment: 'Great shopping experience! Highly recommend.', avatar: '/Choose your favorite ❤️💙💎 📸📸📸  Midjourney….jpeg' },
        { name: 'Bob Mickel', comment: 'Fast delivery and amazing support.', avatar: '/I will create animated and talking avatar or image….jpeg' },
        { name: 'Carol Smith', comment: 'Love the wide selection of products!', avatar: '/A CEO Style Profile Picture made by iFoto PFP….jpeg' },
        { name: 'David Ruuber', comment: 'BuzzCart makes online shopping so easy.', avatar: '/Free Avatar Generated with AI - icon0_com Download….jpeg' },
        { name: 'Eve Deviina', comment: 'Fantastic platform for local businesses.', avatar: '/صوره كيوته.jpeg' },
      ].map((c, index) => (
        <Box
          key={index}
          sx={{
            minWidth: 250,
            backgroundColor: '#fff',
            p: 3,
            borderRadius: 2,
            boxShadow: 3,
            flexShrink: 0, // prevents shrinking
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Avatar */}
          <Box
            component="img"
            src={c.avatar}
            alt={c.name}
            sx={{
              width: 180,
              height: 180,
              borderRadius: '50%',
              mb: 2,
              objectFit: 'fit',
            }}
          />

          {/* Name */}
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
            {c.name}
          </Typography>

          {/* Comment */}
          <Typography variant="body2">{c.comment}</Typography>
        </Box>
      ))}
    </Box>
  </Container>
</Box>




      
    </>
  );
};

export default About;
