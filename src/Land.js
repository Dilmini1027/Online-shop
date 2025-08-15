import React from 'react';
import { AppBar, Toolbar, Typography, Button, Stack,Grid} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Land = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  const handleNavClick = (path) => {
    navigate(path); // Set proper routes like '/about', '/contact' etc.
  };

  return (
    <>
      {/* ✅ Navbar */}
      <AppBar position="static" sx={{ backgroundColor: '#000' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            BuzzCart
          </Typography>

          <Stack direction="row" spacing={6}>
  <Button
    color="inherit"
    onClick={() => handleNavClick('/')}
    sx={{
      '&:hover': {
        color: '#ffcc00',
      },
    }}
  >
    Home
  </Button>

  <Button
    color="inherit"
    onClick={() => handleNavClick('/about')}
    sx={{
      '&:hover': {
        color: '#ffcc00', // Change to any hover color you like
      },
    }}
  >
    About Us
  </Button>

  <Button
    color="inherit"
    onClick={() => handleNavClick('/users')}
    sx={{
      '&:hover': {
        color: '#ffcc00',
      },
    }}
  >
    Target Users
  </Button>

  <Button
    color="inherit"
    onClick={() => handleNavClick('/contact')}
    sx={{
      '&:hover': {
        color: '#ffcc00',
      },
    }}
  >
    Contact Us
  </Button>
</Stack>

        </Toolbar>
      </AppBar>

      {/* ✅ Main Landing Layout */}
      <Grid
        container
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          minHeight: 'calc(100vh - 64px)', // adjust for AppBar height
        }}
      >
        {/* Left Side */}
        <Grid
          sx={{
            backgroundColor: '#000000ff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: { xs: 4, md: 8 },
            color: 'white',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Wear it. Eat it. Love it.
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              textTransform: 'uppercase',
              lineHeight: 1.2,
              mb: 4,
            }}
          >
            shop <br /> smarter
          </Typography>

          <Button
            variant="outlined"
            onClick={handleGetStarted}
            sx={{
              width: 'fit-content',
              paddingX: 3,
              paddingY: 1.5,
              borderRadius: 10,
              fontWeight: 'bold',
              textTransform: 'none',
              color: '#ffffffff',
              fontSize: '16px',
              '&:hover': {
                backgroundColor: '#030431ff',
                color: '#fff',
              },
            }}
          >
            Get Started
          </Button>
        </Grid>

        {/* Right Side */}
        <Grid
          sx={{
            backgroundImage: `url('/front-view-forklift-letters-black-background.jpg')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#000000ff',
          }}
        />
      </Grid>
    </>
  );
};

export default Land;
