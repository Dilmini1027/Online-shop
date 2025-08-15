// src/pages/CakeTypes.jsx
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  Breadcrumbs,
  Link,
  Box,
  TextField,
  Stack,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate, useLocation } from 'react-router-dom';

const Cakes = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (path) => navigate(path);

  const allCategories = [
    { title: 'Cakes', link: '/cakes', color: '#ffcc80' },
    { title: 'Clothes', link: '/clothes', color: '#90caf9' },
    { title: 'Fruits', link: '/fruits', color: '#a5d6a7' },
    { title: 'Flowers', link: '/flowers', color: '#f48fb1' },
    { title: 'Vegetables', link: '/vegetables', color: '#81c784' },
    { title: 'Drinks', link: '/drinks', color: '#bcaaa4' },
  ];

  const cakeTypes = [
    { title: 'Chocolate Cake', link: '/cakes/chocolate', image: '/cakes/chocolate.jpg', type: 'full' },
    { title: 'Vanilla Cake', link: '/cakes/vanilla', image: '/cakes/vanilla.jpg', type: 'full' },
    { title: 'Strawberry Cake', link: '/cakes/strawberry', image: '/cakes/strawberry.jpg', type: 'slice' },
    { title: 'Cheesecake', link: '/cakes/cheesecake', image: '/cakes/cheesecake.jpg', type: 'slice' },
    { title: 'Red Velvet', link: '/cakes/red-velvet', image: '/cakes/red-velvet.jpg', type: 'full' },
    { title: 'Lemon Cake', link: '/cakes/lemon', image: '/cakes/lemon.jpg', type: 'slice' },
    { title: 'Black Forest', link: '/cakes/black-forest', image: '/cakes/black-forest.jpg', type: 'full' },
    { title: 'Carrot Cake', link: '/cakes/carrot', image: '/cakes/carrot.jpg', type: 'slice' },
  ];

  const pathSegments = location.pathname.split('/').filter(Boolean);
  const currentPage = pathSegments[pathSegments.length - 1] || 'Home';

  const [searchQuery, setSearchQuery] = useState('');
  const filteredCategories = allCategories.filter(cat =>
    cat.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [cakeFilter, setCakeFilter] = useState('all');
  const filteredCakes = cakeTypes.filter(cake => {
    if (cakeFilter === 'all') return true;
    return cake.type === cakeFilter;
  });

  return (
    <>
      {/* Breadcrumb Navbar */}
      <AppBar position="static" sx={{ backgroundColor: '#000' }}>
        <Toolbar>
          <Breadcrumbs
            aria-label="breadcrumb"
            separator="›"
            sx={{ fontSize: '1rem', color: 'white', width: '100%' }}
          >
            <Link
              underline="hover"
              sx={{ cursor: 'pointer', color: 'red' }}
              onClick={() => handleNavClick('/home')}
            >
              Home
            </Link>
            <Typography sx={{ fontWeight: 'bold', color: 'white' }}>
              {currentPage.replace('-', ' ')}
            </Typography>
          </Breadcrumbs>
        </Toolbar>
      </AppBar>

      {/* Category Navbar */}
      <AppBar position="static" sx={{ backgroundColor: '#333' }}>
        <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
          <Stack direction="row" spacing={5} flexWrap="wrap">
            {filteredCategories.map((cat, idx) => {
              const isCakes = cat.title.toLowerCase() === 'cakes';
              return (
                <Box key={idx} sx={{ position: 'relative', display: 'inline-block' }}>
                  <Link
                    underline="hover"
                    sx={{
                      cursor: 'pointer',
                      color: 'white',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      '&:hover': { color: '#ffcc80' },
                    }}
                    onClick={() => handleNavClick(cat.link)}
                  >
                    {cat.title} {isCakes && <ArrowDropDownIcon sx={{ fontSize: '1rem' }} />}
                  </Link>

                  {/* Hover Filter Options for Cakes */}
                  {isCakes && (
                    <Box
                      sx={{
                        display: 'none',
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        backgroundColor: '#555',
                        boxShadow: 3,
                        borderRadius: 1,
                        zIndex: 1000,
                        minWidth: 100,
                        '& a': {
                          display: 'block',
                          padding: '8px 16px',
                          color: 'white',
                          textDecoration: 'none',
                          cursor: 'pointer',
                          '&:hover': { backgroundColor: '#777' },
                        },
                      }}
                      className="cake-filters"
                    >
                      <a onClick={() => setCakeFilter('all')}>All</a>
                      <a onClick={() => setCakeFilter('slice')}>Slices</a>
                      <a onClick={() => setCakeFilter('full')}>Full Cake</a>
                    </Box>
                  )}
                </Box>
              );
            })}
          </Stack>

          {/* Search */}
          <TextField
            placeholder="Search Category"
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ backgroundColor: '#fff', borderRadius: 1, minWidth: 200 }}
          />
        </Toolbar>
      </AppBar>

      {/* Cake Grid */}
      <Container maxWidth={false} sx={{ p: 0, mt: 2 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gridAutoRows: '250px',
            gap: 2,
          }}
        >
          {filteredCakes.map((cake, index) => (
            <Card
              key={index}
              sx={{
                cursor: 'pointer',
                '&:hover': { transform: 'scale(1.05)', transition: '0.3s' },
              }}
              onClick={() => handleNavClick(cake.link)}
            >
              <CardMedia
                component="img"
                height="100%"
                image={cake.image}
                alt={cake.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ p: 1 }}>
                <Typography
                  variant="subtitle1"
                  sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1rem' }}
                >
                  {cake.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      {/* Hover effect via CSS */}
      <style>
        {`
          .MuiToolbar-root .cake-filters {
            display: none;
          }
          .MuiToolbar-root .MuiBox-root:hover .cake-filters {
            display: block;
          }
        `}
      </style>
    </>
  );
};

export default Cakes;
