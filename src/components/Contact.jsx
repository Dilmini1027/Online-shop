// src/pages/Contact.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Stack, Container, Box, Card, CardContent, TextField, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  const navigate = useNavigate();

  const handleNavClick = (path) => navigate(path);

  const contactDetails = [
    { icon: <EmailIcon sx={{ color: '#fff' }} />, label: 'Email', value: 'buzzcartway@gmail.com', color: '#ff5722' },
    { icon: <PhoneIcon sx={{ color: '#fff' }} />, label: 'Phone', value: '+94 71 234 5678', color: '#00bcd4' },
    { icon: <LocationOnIcon sx={{ color: '#fff' }} />, label: 'Address', value: 'No. 148, Vauxhall Street, Colombo 2', color: '#ffcc00' },
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
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 6 }}>
          Contact Us
        </Typography>

        <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          {/* Left Side: BuzzCart Contact Info */}
          <Card sx={{ flex: 1, minWidth: 300, backgroundColor: '#f5f5f5' }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 4 }}>
                BuzzCart Contact Info
              </Typography>
              {contactDetails.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      backgroundColor: item.color,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      mr: 2,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{item.label}</Typography>
                    <Typography variant="body2">{item.value}</Typography>
                  </Box>
                </Box>
              ))}
            </CardContent>
          </Card>

          {/* Right Side: User Contact Form */}
          <Card sx={{ flex: 1, minWidth: 300 }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center' }}>
                Send Us a Message
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Subject" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Message" variant="outlined" multiline rows={4} />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: '#000', '&:hover': { backgroundColor: '#333' }, px: 5, py: 1.5 }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default Contact;
